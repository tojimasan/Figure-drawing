import { IconButton } from "@chakra-ui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export const ToolSetingIconButton = ({ ariaLabel }: { ariaLabel: string }) => {
  const handleOnClick = () => {
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
