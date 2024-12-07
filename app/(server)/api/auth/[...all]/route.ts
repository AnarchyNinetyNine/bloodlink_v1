import { auth } from "@/utils/auth"; // auth file
import { toNextJsHandler } from "better-auth/next-js";
 
export const { POST, GET } = toNextJsHandler(auth);