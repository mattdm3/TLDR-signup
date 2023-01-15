import React from "react";
import { SignupForm } from "@tldr/src/components/SignupForm";

export const Landing = () => {
  return (
    <section className="w-full flex justify-center items-center p-10  h-screen">
      <div className="w-96 ">
        <hgroup className="text-center mb-2 font-medium ">
          <h1 className="text-5xl">TLDR</h1>
          <p className="text-sm">
            Byte sized news for busy techies <br /> TLDR is the free daily
            newsletter with links and TLDRs of the most interesting stories in
            startups 🚀, tech 📱, and programming 💻!
          </p>
        </hgroup>
        <SignupForm />
      </div>
    </section>
  );
};
