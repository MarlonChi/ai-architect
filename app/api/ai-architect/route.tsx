import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(req: NextRequest) {
  const { imageUrl, roomType, designType, additionalInformation } =
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
    return NextResponse.json({ result: output });
  } catch (err) {
    return NextResponse.json({ result: err });
  }
}
