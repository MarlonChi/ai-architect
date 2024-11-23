import Image from "next/image";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface CustomLoadingProps {
  loading: boolean;
}

export const CustomLoading = ({ loading }: CustomLoadingProps) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <AlertDialogTitle className="sr-only">Carregando...</AlertDialogTitle>
        <div className="bg-transparent flex flex-col items-center my-10 justify-center">
          <Image src={"/spinner.gif"} alt="" width={100} height={100} />
          <AlertDialogDescription className="text-center text-xl">
            Projetando seu cômodo. Por favor aguarde...
          </AlertDialogDescription>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
