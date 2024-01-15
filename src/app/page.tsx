"use client";
import { useState } from "react";
import RegisterForm from "./_components/register";
import LoginForm from "./_components/login";

export default function Home() {
  const [openTab, setOpenTab] = useState(1);
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
                    openTab === 1
                      ? "inline-block p-4 text-primary border-b-2 border-primary active"
                      : "inline-block p-4 border-b-2 border-transparent hover:text-gray-600"
                  }
                  onClick={() => setOpenTab(1)}
                >
                  SIgn up
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={
                    openTab === 2
                      ? "inline-block p-4 text-primary border-b-2 border-primary active"
                      : "inline-block p-4 border-b-2 border-transparent hover:text-gray-600"
                  }
                  onClick={() => setOpenTab(2)}
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
          {/* Tabs end */}

          <div className="w-full px-8 justify-center pb-12 pt-4  bg-light-one dark:bg-dark-two">
            {openTab === 1 ? <RegisterForm /> : <LoginForm />}
          </div>
        </div>
      </div>
    </main>
  );
}
