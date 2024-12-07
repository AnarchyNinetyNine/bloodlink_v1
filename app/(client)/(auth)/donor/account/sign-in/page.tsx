import SignInForm from "@/components/signInForm/signInForm";
import { ThemeSwitcherButton } from "@/components/themeModes/ThemeSwitcherBtn";
import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // Adjust weights as needed
});

const Page = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* ThemeSwitcherButton positioned in the top-right corner */}
      <div className="absolute top-4 right-4">
        <ThemeSwitcherButton />
      </div>
      {/* Sign In Card */}
      <div className="border border-transparent animate-border w-full max-w-md p-8 bg-white bg-opacity-25 backdrop-blur-3xl rounded-lg shadow-2xl dark:bg-neutral-800 dark:bg-opacity-25 dark:backdrop-blur-3xl space-y-4">
        {/* Header */}
        <h1
          className={`text-3xl font-semibold text-center text-transparent bg-clip-text bg-red-500 ${poppins.className}`}
        >
          Sign In
        </h1>

        {/* Sign In Form */}
        <SignInForm />
        <p className="mt-2 text-center text-neutral-700 dark:text-neutral-400 text-sm">
          Don’t have an account?{" "}
          <Link href="/donor/account/sign-up" className="text-red-500 hover:underline dark:text-red-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
