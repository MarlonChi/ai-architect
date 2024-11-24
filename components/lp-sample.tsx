import Image from "next/image";

export const LpSample = () => {
  return (
    <div className="flex items-center justify-between">
      <Image
        src="/sample.jpg"
        alt="Exemplo"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <Image src="/lp/arrow.png" alt="Exemplo" width={100} height={60} />
      <Image
        src="/lp/ai-image.png"
        alt="Exemplo"
        width={300}
        height={200}
        className="rounded-lg"
      />
    </div>
  );
};
