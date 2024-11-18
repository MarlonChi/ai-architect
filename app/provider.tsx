"use client";

import { ReactNode, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

import { UserDetailContext } from "./_context/UserDetailContext";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  }, [user]);

  const VerifyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", {
      user: user,
    });

    setUserDetail(dataResult.data.result);
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
};

export default Provider;
