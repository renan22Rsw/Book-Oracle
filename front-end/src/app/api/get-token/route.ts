import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookiesStore = cookies();
  const session = cookiesStore.get("session")?.value;

  if (!session) {
    throw new Error("Unathorized");
  }

  return NextResponse.json(session);
}
