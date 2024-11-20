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
      <label className="text-slate-400">Selecione o tipo *</label>
      <Select onValueChange={(value) => selectedRoomType(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tipo de cômodo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="livingRoom">Sala de estar</SelectItem>
          <SelectItem value="bedroom">Quarto</SelectItem>
          <SelectItem value="kitchen">Cozinha</SelectItem>
          <SelectItem value="office">Escritório</SelectItem>
          <SelectItem value="bathroom">Banheiro</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
