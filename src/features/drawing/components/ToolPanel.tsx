import { Box } from "@chakra-ui/react";
import {
  TbSquare,
  TbTriangle,
  TbCircle,
  TbPencil,
  TbTrash,
} from "react-icons/tb";
import { ToolIconButton } from "./ToolIconButton";
import { ToolSetingIconButton } from "./ToolSettingIconButton";

export const ToolPanel = () => {
  return (
    <Box
      pos={"absolute"}
      bottom="10"
      left="50%"
      transform={"translateX(-50%)"}
      display="flex"
      flexDirection="row"
      gap={4}
      px="8"
      py="6"
      width="fit-content"
      height="fit-content"
      backgroundColor="white"
      boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)"
      borderRadius="10000px"
    >
      <ToolIconButton icon={<TbSquare />} ariaLabel="square" />
      <ToolIconButton icon={<TbTriangle />} ariaLabel="triangle" />
      <ToolIconButton icon={<TbCircle />} ariaLabel="circle" />
      <ToolIconButton icon={<TbPencil />} ariaLabel="pencil" />
      <ToolIconButton icon={<TbTrash />} ariaLabel="trash" />
      <ToolSetingIconButton ariaLabel="trash" />
    </Box>
  );
};
