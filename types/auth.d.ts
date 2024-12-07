// auth.d.ts (or any global types file)
import { UserSchema } from "better-auth";

declare module "better-auth" {
  interface UserSchema {
    phoneNumber?: string; // Add phoneNumber to the user schema
  }
}
