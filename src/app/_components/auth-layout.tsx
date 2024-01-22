"use client";
import { useState } from "react";
import RegisterForm from "./register";
import LoginForm from "./login";

import { usePathname } from "next/navigation";
import Label from "./label";
interface Props {
  label?: string;
  children?: JSX.Element;
}

export default function Home({ label, children }: Props) {
  const [openTab, setOpenTab] = useState(1);
  const pathname = usePathname();
  return (
    <main>
      <div className="block bg-hero-pattern bg-right-bottom bg-cover bg-no-repeat py-14 px-10 xs:p-6">
        {/* Tabs */}
        <div className="max-w-lg border-2 border-gray-200 rounded-2xl overflow-hidden m-auto bg-white shadow-xl">
          <div className="font-medium text-center text-body-color border-b-2 border-gray-200 bg-white">
            <ul className="flex flex-wrap justify-center -mb-px">
              <li className="mr-2">
                <button
                  className={
                    "inline-block p-4 text-primary border-b-2 border-primary active"
                  }
                >
                  {label}
                </button>
              </li>
            </ul>
          </div>
          {/* Tabs end */}

          <div className="w-full px-8 justify-center pb-12 pt-4  bg-light-one dark:bg-dark-two">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
