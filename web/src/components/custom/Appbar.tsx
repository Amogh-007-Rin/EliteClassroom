'use client'
import { Button } from "@/components/ui/buttons/button";
import { signIn, signOut } from "next-auth/react";

export default function Appbar() {
  return (
    <div className="w-full h-[7%] flex items-center justify-center">
      <Button onClick={() => signIn()}>Signin</Button>
      <Button onClick={() => signOut()}>SignOut</Button>
    </div>
  );
}
