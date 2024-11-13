import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { user } = await req.json();

  try {
    // if user already exists
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress.emailAddress));

    console.log("userInfo: ", userInfo);

    // if not will add new user to DB
  } catch (err) {
    console.error(err);
  }

  return NextResponse.json({ result: user });
}
