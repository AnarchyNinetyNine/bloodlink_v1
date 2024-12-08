import { serialize } from "cookie";
import { NextResponse } from "next/server";

/**
 * Mock function to invalidate a token.
 * Replace this with your actual token revocation logic.
 */

async function invalidateToken(token: string) {
  console.log(`Token invalidated: ${token}`);
  // Example: Add the token to a revocation database or blacklist
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { message: "Authorization header missing" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        { message: "Token missing" },
        { status: 401 }
      );
    }

    // Invalidate the token
    await invalidateToken(token);

    // Set the cookie to expire
    const cookie = serialize("accessToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/", // Clear cookie from all routes
      expires: new Date(0), // Set expiration date in the past
    });

    const headers = new Headers();
    headers.append("Set-Cookie", cookie);

    return NextResponse.json(
      { message: "Logged out successfully" },
      { headers, status: 200 }
    );
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
