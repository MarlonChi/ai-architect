import { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

import { RoomDetails } from "./listing";
import { AiOutputDialog } from "./ai-output-dialog";

interface RoomItemProps {
  room: RoomDetails;
}

export const RoomItem = ({ room }: RoomItemProps) => {
  const [openOutputDialog, setOpenOutputDialog] = useState(false);

  const onClickHandler = () => {
    setOpenOutputDialog(true);
  };

  return (
    <div
      className="shadow-md rounded-md cursor-pointer"
      onClick={() => onClickHandler()}
    >
      <ReactBeforeSliderComponent
        firstImage={{
          imageUrl: room.aiImage,
        }}
        secondImage={{
          imageUrl: room.orgImage,
        }}
      />
      <div className="p-2">
        <h2>🏚️ Ambiente: {room.roomType}</h2>
        <h2>🎨 Estilo: {room.designType}</h2>
      </div>

      <AiOutputDialog
        isOpen={openOutputDialog}
        setIsOpen={() => setOpenOutputDialog(false)}
        orgImageUrl={room.orgImage}
        aiImageUrl={room.aiImage}
      />
    </div>
  );
};
