import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from '@/utils/auth';


export const authClient = createAuthClient({
    baseURL: "http://localhost:3000" // the base url of your auth server
})