"use client";

import { ReactNode, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  }, [user]);

  const VerifyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", {
      user: user,
    });

    console.log(dataResult.data);
  };

  return <div>{children}</div>;
};

export default Provider;
