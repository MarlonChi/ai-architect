"use client";

import { useContext, useState } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useUser } from "@clerk/nextjs";
import { Users } from "@/config/schema";

import { Button } from "@/components/ui/button";
import { AdditionalInformation } from "./_components/additional-information";
import { DesignType } from "./_components/design-type";
import { ImageSelection } from "./_components/image-selection";
import { RoomType } from "./_components/room-type";
import { storage } from "@/config/firebaseConfig";
import { CustomLoading } from "./_components/custom-loading";
import { AiOutputDialog } from "../_components/ai-output-dialog";
import { db } from "@/config/db";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { User } from "@/app/_types";

interface FormDataProps {
  image: File;
  roomType: string;
  designType: string;
  additionalInformation: string;
}

const CreateNew = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState<FormDataProps>({
    image: null as unknown as File,
    roomType: "",
    designType: "",
    additionalInformation: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutputImage, setAiOutputImage] = useState<string | null>(null);
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const [orgImage, setOrgImage] = useState<string | null>(null);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  // const [outputResult, setOutputResult] = useState();

  const onHandleInputChange = (
    value: File | string,
    fieldName: keyof FormDataProps
  ) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const GenerateAiImage = async () => {
    setIsLoading(true);
    const rawImageUrl = await SaveRawImageToFirebase();
    const result = await axios.post("/api/ai-architect", {
      imageUrl: rawImageUrl,
      roomType: formData?.roomType,
      designType: formData?.designType,
      additionalInformation: formData?.additionalInformation,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(result.data);
    setAiOutputImage(result.data.result);
    setOpenOutputDialog(true);
    await updateUserCredits();
    setIsLoading(false);
  };

  const SaveRawImageToFirebase = async () => {
    const fileType = formData.image.type.split("/")[1];
    const fileName = Date.now() + "_raw." + fileType;
    const imageRef = ref(storage, "ai-architect/" + fileName);

    await uploadBytes(imageRef, formData.image).then(() => {
      console.log("File uploaded...");
    });

    const downloadUrl = await getDownloadURL(imageRef);
    console.log("downloadUrl: ", downloadUrl);
    setOrgImage(downloadUrl);
    return downloadUrl;
  };

  const updateUserCredits = async () => {
    const result = await db
      .update(Users)
      .set({
        credits: Number(userDetail?.credits) - 1,
      })
      .returning({ id: Users.id });

    if (result) {
      setUserDetail((prev: User) => ({
        ...prev,
        credits: userDetail?.credits - 1,
      }));
      return result[0].id;
    }
  };

  const isButtonDisabled =
    formData.image === null ||
    formData.roomType === "" ||
    formData.designType === "";

  return (
    <div>
      <h2 className="font-bold text-4xl text-primary text-center">
        Experimente a mágica da remodelação por IA
      </h2>
      <p className="text-center text-gray-500">
        Tranforme sua casa com um clique. Selecione um espaço, escolha um estilo
        e assista a nossa IA reimaginar seu ambiente.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        <ImageSelection
          selectedImage={(value: File) => onHandleInputChange(value, "image")}
        />
        <div>
          <RoomType
            selectedRoomType={(value: string) =>
              onHandleInputChange(value, "roomType")
            }
          />

          <DesignType
            selectedDesignType={(value: string) =>
              onHandleInputChange(value, "designType")
            }
          />

          <AdditionalInformation
            additionalInformationInput={(value: string) =>
              onHandleInputChange(value, "additionalInformation")
            }
          />

          <Button
            className="w-full mt-5"
            onClick={GenerateAiImage}
            disabled={isButtonDisabled}
          >
            Gerar
          </Button>
          <p className="text-sm text-gray-400 mb-52">
            Observação: Um crédito será usado para gerar sua imagem.
          </p>
        </div>
      </div>

      <CustomLoading loading={isLoading} />

      <AiOutputDialog
        isOpen={openOutputDialog}
        setIsOpen={setOpenOutputDialog}
        orgImageUrl={orgImage!}
        aiImageUrl={aiOutputImage!}
      />
    </div>
  );
};

export default CreateNew;
