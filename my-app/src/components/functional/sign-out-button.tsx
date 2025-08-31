"use client";

import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


import { Button } from "../ui/button";


function SignOutButton() {
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      router.push("/");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button disabled={loading} onClick={onSignOut} className="w-full">
      Signout
    </Button>
  );
}

export default SignOutButton;