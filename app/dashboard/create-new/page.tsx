"use client";

import { DesignType } from "./_components/design-type";
import { ImageSelection } from "./_components/image-selection";
import { RoomType } from "./_components/room-type";

const CreateNew = () => {
  const onHandleInputChange = (value: File | string, fieldName: string) => {
    console.log(value, fieldName);
  };

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
        </div>
      </div>
    </div>
  );
};

export default CreateNew;
