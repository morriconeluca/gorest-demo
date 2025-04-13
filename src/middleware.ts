import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("MIDDLEWARE", request.nextUrl.pathname);
}

// Exclude static files
export const config = { matcher: "/((?!.*\\.).*)" };
