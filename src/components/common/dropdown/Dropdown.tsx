import { useState } from "react";
import * as S from "./style";
interface DropdownProps {
  options: string[];
}
const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={toggleDropdown}>
        {selectedOption || "Select an option"}
      </S.DropdownButton>
      <S.DropdownMenu open={isOpen}>
        {options.map((option) => (
          <S.DropdownMenuItem key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </S.DropdownMenuItem>
        ))}
      </S.DropdownMenu>
    </S.DropdownContainer>
  );
};

export default Dropdown;
