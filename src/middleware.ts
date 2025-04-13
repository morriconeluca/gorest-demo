import { NextRequest, NextResponse } from "next/server";
import { ROOT_PATH } from "./middleware.models";

export async function middleware(req: NextRequest) {
  console.log("MIDDLEWARE", req.nextUrl.pathname);

  if (req.nextUrl.pathname === ROOT_PATH) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }
}

// Exclude static files
export const config = { matcher: "/((?!.*\\.).*)" };
