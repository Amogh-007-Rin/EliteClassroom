'use client'
import { Button } from "@/components/ui/buttons/button";
import { signIn, signOut } from "next-auth/react";
import ThemeSwitcherButton from "./buttons/ThemeSwitchButton";

export default function Appbar() {
  return (
    <div className="w-full h-[7%] flex items-center justify-center">
      <div className="Nav-part-1 w-1/2 h-full bg-green-900 flex items-center justify-start px-4">
        Logo
      </div>
      <div className="Nav-part-2 w-1/2 h-full bg-red-900  flex items-center justify-end gap-4 px-4">
        <Button onClick={() => signIn()}>Signin</Button>
        <Button onClick={() => signOut()}>SignOut</Button>
        <ThemeSwitcherButton />
      </div>

    </div>
  );
}
