import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/utils/prisma';
import bcrypt from "bcryptjs"

const JWT_SECRET = process.env.JWT_SECRET as string; // Environment variable setup

// POST handler
export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email, password, role } = body;

    if (!email || !password) return NextResponse.json({ message: "Email and password are required" }, { status: 400 });

    // Query the user from the Prisma schema
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        role: true,
        password: true
    },
    });

    if (!user) return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });

    // Example password check (replace with a real hash comparison function like bcrypt.compare)
    if (user.role !== role) return NextResponse.json({ message: "Access denied. Insufficient permissions." }, { status: 403 });

    // Check the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });

    // Generate JWT using user's email and role
    const accessToken = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    // Set the token as an HTTP-only cookie
    const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour in seconds
      path: '/',
    });

    return response;

  } catch (error) {
      console.error('Error handling POST request:', error);
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  } finally {
      await prisma.$disconnect();
  }
}