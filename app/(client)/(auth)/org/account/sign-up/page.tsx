import RegistrationForm from "@/components/registration_form/registration_form";
import { ThemeSwitcherButton } from "@/components/themeModes/ThemeSwitcherBtn";
import { BadgeSimpleVariantAmber } from "@/components/badges/amber";
import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // Adjust weights as needed
});

const Page = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute top-4 right-4">
        <ThemeSwitcherButton />
      </div>
      <div className="border border-transparent animate-border w-full max-w-md p-8 bg-white bg-opacity-25 backdrop-blur-3xl rounded-lg shadow-2xl dark:bg-neutral-800 dark:bg-opacity-25 dark:backdrop-blur-3xl space-y-4">
        {/* Header */}
        <h1
          className={`text-3xl font-semibold text-center text-transparent bg-clip-text bg-red-500 ${poppins.className}`}
        >
          Sign Up{" "}
          <BadgeSimpleVariantAmber text="Hospital Portal"/> {/* Adding the badge next to the text */}
        </h1>

        {/* Registration Form */}
        <RegistrationForm />
        <p className="mt-2 text-center text-neutral-700 dark:text-neutral-400 text-sm">
          Already have an account?{" "}
          <Link
            href="/org/account/sign-in"
            className="text-red-500 hover:underline dark:text-red-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
