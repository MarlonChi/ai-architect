"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";

interface ImageSelectionProps {
  selectedImage: (value: File) => void;
}

export const ImageSelection = ({ selectedImage }: ImageSelectionProps) => {
  const [file, setFile] = useState<File | undefined>();

  const onFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      selectedImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <label>Selecione a imagem do seu ambiente</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`p-28 border rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-md ${
              file && "p-0 bg-white"
            }`}
          >
            {!file ? (
              <Image src={"/image-upload.PNG"} width={70} height={70} alt="" />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={300}
                height={300}
                alt=""
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          accept=".png,.jpg"
          id="upload-image"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};
