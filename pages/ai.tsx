import React, { useEffect } from "react";

import Menu from "../components/menu";
import PromptForm from "./prompter";

export default function AI() {
  useEffect(() => {});
  return (
    <div>
      <div className="bg-ibex-pattern2 bg-cover bg-center h-screen w-screen fixed -z-10">
        <div className="flex h-screen items-center bg-gradient-to-l from-black via-stone-600"></div>
      </div>
      <div className="flex">
        {/* left col */}

        <div className="flex-none w-14 h-14">
          <Menu />
          <Menu />
          <Menu />
          <Menu />
        </div>

        {/* left col */}

        <div className="flex-auto">
          <div className="p-8 space-y-10 items-center justify-center">
            <PromptForm />
          </div>
        </div>
      </div>
    </div>
  );
}
