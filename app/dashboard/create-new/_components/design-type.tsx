import Image from "next/image";

import { DesignsStyles } from "@/app/_utils/design-types";
import { useState } from "react";

interface DesignTypeProps {
  selectedDesignType: (value: string) => void;
}

export const DesignType = ({ selectedDesignType }: DesignTypeProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="mt-5">
      <label className="text-gray-500">Estilo do Ambiente</label>
      <div className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {DesignsStyles.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.name);
              selectedDesignType(design.name);
            }}
          >
            <Image
              src={design.image}
              width={100}
              height={100}
              alt={design.name}
              className={`h-[80px] rounded-md hover:scale-105 transition-all cursor-pointer ${
                design.name === selectedOption &&
                "border-2 border-primary rounded-md p-1"
              }`}
            />
            <h2>{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
