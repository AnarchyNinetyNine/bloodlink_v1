import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/utils/prisma';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password, phoneNumber, role } = body;

    // Validate input
    if (!firstName || !lastName || !email || !password || !phoneNumber || !role) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Check if the email or phone number already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { phoneNumber }
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email or phone number already in use" }, { status: 400 });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the User table
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
        fullName: `${firstName} ${lastName}`,
        phoneNumber,
      }
    });

    // Create the donor in the Donor table and link it to the user
    await prisma.donor.create({
      data: {
        userId: user.id,
        firstName,
        lastName,
      }
    });

    const response = NextResponse.json({ message: "Sign-up successful" }, { status: 201 });
    return response;

  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });

  } finally {
    await prisma.$disconnect();
  }
};
