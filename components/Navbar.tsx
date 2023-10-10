import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import Mainnav from "./Mainnav";

type Props = {};

const Navbar = (props: Props) => {
  const { userId } = auth();

  return (
    <div className=" m-8 flex  border-b-2 p-2 justify-around">
      <Link href="/">
        <div className=" text-gray-700 font-bold text-xl ml-2">
          Trade<span className=" text-blue-700">Vault</span>
        </div>
      </Link>
      <Mainnav  className="mx-6"/>

      <div>
        {userId ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link href="/sign-in">
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
