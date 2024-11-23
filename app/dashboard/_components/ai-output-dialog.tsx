import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface AiOutputDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;

  orgImageUrl: string;
  aiImageUrl: string;
}

export const AiOutputDialog = ({
  isOpen,
  setIsOpen,
  orgImageUrl,
  aiImageUrl,
}: AiOutputDialogProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Resultado:</AlertDialogTitle>
          <AlertDialogDescription className="sr-only"></AlertDialogDescription>
        </AlertDialogHeader>
        <ReactBeforeSliderComponent
          firstImage={{
            imageUrl: aiImageUrl,
          }}
          secondImage={{
            imageUrl: orgImageUrl,
          }}
        />
        <AlertDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Fechar</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
