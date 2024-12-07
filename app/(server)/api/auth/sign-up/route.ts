import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/utils/prisma';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password, phone, gender, bloodType , address, location } = await req.json();
  
    // Validate required fields
    if (!firstName || !lastName || !email || !password || !phone) {
      return NextResponse.json({ message: 'Please provide all required fields.' }, { status: 400 });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const newDonor = await prisma.donor.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash: hashedPassword,
        phone,
        gender: gender, 
        bloodType: bloodType, 
        address: address, 
        location: location,
      },
    });
  
    return NextResponse.json({ message: 'Registration successful', donor: newDonor }, { status: 201 });
  } catch (error) {
    if ((error as any).code === 'P2002') {
      // Unique constraint violation (e.g., duplicate email or phone)
      return NextResponse.json({ message: 'Email or phone already in use.' }, { status: 409 });
    }

    console.error('Error creating donor:', error);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
  
}
