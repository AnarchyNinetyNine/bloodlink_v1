import React, { FC } from "react";
import RippleLoader from "@/components/loaders/rippleLoader";


// Main Button Component (Enhanced)
// Source: https://syntaxui.com/components/button/heartbeat-button

interface ShineButtonProps {
  loading: boolean;
}

const ShineButton: FC<ShineButtonProps> = ({ loading }) => {
  return (
    <>
      {/* Conditionally render the loader */}
      {loading && <RippleLoader />}

      {/* Button Section */}
      <div className="flex items-center justify-center py-2">
        <button
          disabled={loading} 
          className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-red-500 px-4 py-1.5 text-md font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 w-full">
          <span className="relative">Sign Up</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
        </button>
      </div>
    </>
  );
};

export default ShineButton;


