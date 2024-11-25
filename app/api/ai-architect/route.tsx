import axios from "axios";
import Replicate from "replicate";
import { NextRequest, NextResponse } from "next/server";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

import { db } from "@/config/db";
import { storage } from "@/config/firebaseConfig";
import { AiGeneratedImage } from "@/config/schema";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(req: NextRequest) {
  const { imageUrl, roomType, designType, additionalInformation, userEmail } =
    await req.json();

  try {
    const input = {
      image: imageUrl,
      prompt:
        "A " +
        roomType +
        " with a " +
        designType +
        " style interior " +
        additionalInformation,
    };

    const output = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      { input }
    );

    const base64Image = await ConvertImageToBase64(String(output));

    const fileName = Date.now() + ".png";
    const storageRef = ref(storage, "ai-architect/" + fileName);

    await uploadString(storageRef, base64Image, "data_url");

    const downloadUrl = await getDownloadURL(storageRef);

    const dbResult = await db
      .insert(AiGeneratedImage)
      .values({
        roomType,
        designType,
        orgImage: imageUrl,
        aiImage: downloadUrl,
        userEmail: userEmail,
      })
      .returning({ aiImage: AiGeneratedImage.aiImage });

    return NextResponse.json({ result: dbResult });
  } catch (err) {
    return NextResponse.json({ result: err });
  }
}

async function ConvertImageToBase64(imageUrl: string) {
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const getImageFormat = extractImageFormat(imageUrl);
  const base64ImageRaw = Buffer.from(response.data).toString("base64");

  return "data:image/" + getImageFormat + ";base64," + base64ImageRaw;
}

function extractImageFormat(url: string): string | null {
  const parts = url.split("/");
  const lastPart = parts.pop();

  if (!lastPart) return null;

  const [filename] = lastPart.split("?");
  if (!filename.includes(".")) return null;

  const extension = filename.split(".").pop();
  return extension || null;
}
