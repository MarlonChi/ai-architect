import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RoomTypeProps {
  selectedRoomType: (value: string) => void;
}

export const RoomType = ({ selectedRoomType }: RoomTypeProps) => {
  return (
    <div>
      <label className="text-slate-500">Selecione o tipo *</label>
      <Select onValueChange={(value) => selectedRoomType(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tipo de cômodo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Sala de Estar">Sala de estar</SelectItem>
          <SelectItem value="Sala de jantar">Sala de jantar</SelectItem>
          <SelectItem value="Quarto">Quarto</SelectItem>
          <SelectItem value="Suíte">Suíte</SelectItem>
          <SelectItem value="Closet ">Closet </SelectItem>
          <SelectItem value="Cozinha">Cozinha</SelectItem>
          <SelectItem value="Escritório">Escritório</SelectItem>
          <SelectItem value="Banheiro">Banheiro</SelectItem>
          <SelectItem value="Lavanderia">Lavanderia</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
