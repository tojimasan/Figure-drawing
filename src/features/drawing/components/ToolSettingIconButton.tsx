import { IconButton } from "@chakra-ui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";

type Props = {
  ariaLabel: string;
};

export const ToolSetingIconButton = ({ ariaLabel }: Props) => {
  const handleOnClick = (): void => {
    console.log("モーダルを開きます");
  };

  return (
    <IconButton
      onClick={handleOnClick}
      bg={"white"}
      color={"gray.900"}
      aria-label={ariaLabel}
      icon={<HiOutlineDotsVertical />}
      _hover={{ bg: "gray.200" }}
    />
  );
};
