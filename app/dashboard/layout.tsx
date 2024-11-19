import { ReactNode } from "react";
import { Header } from "./_components/header";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="pt-20 px-10 md:px-20 lg:px-40 xl:px-60">{children}</div>
    </div>
  );
};

export default DashboardLayout;
