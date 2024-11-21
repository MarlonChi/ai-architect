import { Textarea } from "@/components/ui/textarea";

interface AdditionalInformationProps {
  additionalInformationInput: (value: string) => void;
}

export const AdditionalInformation = ({
  additionalInformationInput,
}: AdditionalInformationProps) => {
  return (
    <div className="mt-5">
      <label className="text-gray-500">Informações adicionais (Opcional)</label>
      <Textarea
        className="mt-2"
        onChange={(e) => additionalInformationInput(e.target.value)}
      />
    </div>
  );
};
