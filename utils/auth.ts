import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from '@/utils/prisma'

enum UserRole {
    DONOR,
    HOSPITAL,
    ADMIN
  }

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // database provider
    }),
    emailAndPassword: {  
        enabled: true,
        autoSignIn: false
    },
    onCreate(user: any) {
        console.log("User created with ID:", user.id); // Log the user ID
        return user.id; // Return the user ID
    }
});