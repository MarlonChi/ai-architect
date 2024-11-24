"use client";

import { ReactNode, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { UserDetailContext } from "./_context/UserDetailContext";

interface ProviderProps {
  children: ReactNode;
}

interface UserDetailProps {
  credits: string;
}

const Provider = ({ children }: ProviderProps) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<UserDetailProps[]>([]);

  useEffect(() => {
    const VerifyUser = async () => {
      const dataResult = await axios.post("/api/verify-user", {
        user: user,
      });

      setUserDetail(dataResult.data.result);
    };

    if (user) {
      VerifyUser();
    }
  }, [user]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
          currency: "BRL",
        }}
      >
        <div>{children}</div>
      </PayPalScriptProvider>
    </UserDetailContext.Provider>
  );
};

export default Provider;
