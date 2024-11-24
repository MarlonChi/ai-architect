import Image from "next/image";

export const LpStartup = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3">
        <div className="flex flex-col gap-2 cursor-pointer p-5 rounded-xl w-72 hover:bg-slate-100">
          <div className="bg-blue-700 p-2 rounded-lg w-fit">
            <Image src="/lp/upload.svg" alt="" width={30} height={30} />
          </div>
          <h3 className="font-bold">Upload</h3>
          <p className="text-slate-600">
            Faça upload da imagem do seu ambiente.
          </p>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer p-5 rounded-xl w-72 hover:bg-slate-100">
          <div className="bg-blue-700 p-2 rounded-lg w-fit">
            <Image src="/lp/select-design.svg" alt="" width={30} height={30} />
          </div>
          <h3 className="font-bold">Selecione o Design</h3>
          <p className="text-slate-600">
            Selecione o design e o tipo do ambiente.
          </p>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer p-5 rounded-xl w-72 hover:bg-slate-100">
          <div className="bg-blue-700 p-2 rounded-lg w-fit">
            <Image src="/lp/upload.svg" alt="" width={30} height={30} />
          </div>
          <h3 className="font-bold">Imagem gerada</h3>
          <p className="text-slate-600">
            A visualização da imagem gerada fica pronta em instantes.
          </p>
        </div>
      </div>
    </div>
  );
};
