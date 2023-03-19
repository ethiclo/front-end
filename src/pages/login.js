import React from "react";
import logoImg from "../../public/img/ethiclo-logo.JPEG";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

function Login({ providers }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid flex-grow grid-cols-2 justify-center items-center">
        <div className="flex items-center justify-center bg-primary h-full w-full">
          <Image src={logoImg} width={500} alt="" />
        </div>
        <div className="border-black bg-gray-200 flex flex-col h-full w-full justify-center items-center">
          <div className="bg-white px-8 py-8 rounded-lg shadow-md border-2">
            <h3 className="text-black text-4xl mb-8 text-center font-bold">
              Sign in here!
            </h3>
            <div className="">
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button
                    className="items-center flex bg-primary shadow-md border-black rounded py-6 justify-around text-white hover:opacity-80 px-10"
                    onClick={() => signIn(provider.id)}
                  >
                    <FontAwesomeIcon className="h-10 mr-3 " icon={faGoogle} />
                    Login with {provider.name}
                  </button>
                </div>
              ))}
              {/* <button
                className="items-center flex bg-primary shadow-md border-black rounded py-6 justify-around text-white hover:opacity-80 px-10"
                onClick={signIn(provider.id)}
              >
                <FontAwesomeIcon className="h-10 mr-3 " icon={faGoogle} />
                Login with Google
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const Footer = () => {
  return (
    <div className="w-full p-3 bg-gray-700">
      <div className="text-white flex justify-between items-center">
        <div>
          <p className="">
            Cole Purboo, Rayce Ramsay, Michael Anthony-Dawes, Serah George
          </p>
          <p>Copyright ETHICLO. All Rights Reserved</p>
        </div>
        <div className="">
          <a href="https://github.com/ethiclo" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="h-10 " icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/dashboard" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}

export default Login;
