import { IconButton, useToast } from "@chakra-ui/react";
import { useState } from "react";

export const ToolIconButton = ({
  ariaLabel,
  icon,
}: {
  ariaLabel: string;
  icon: any;
}) => {
  const [isActive, setIsActive] = useState(false);
  const primaryColor = "#46B2EF";
  const toast = useToast();
  const popToast = () => {
    toast({
      description: "この機能は鋭意作成中です",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };
  const handleOnClick = () => {
    setIsActive((prev) => !prev);
    popToast();
  };

  return (
    <IconButton
      bg={isActive ? primaryColor : "white"}
      onClick={handleOnClick}
      color={isActive ? "white" : "gray.900"}
      aria-label={ariaLabel}
      icon={icon}
      _hover={{ bg: isActive ? primaryColor : "gray.200" }}
    />
  );
};
