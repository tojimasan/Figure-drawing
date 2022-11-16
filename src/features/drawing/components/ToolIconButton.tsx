import { IconButton, useToast } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  ariaLabel: string;
  icon: any;
};

export const ToolIconButton = ({ ariaLabel, icon }: Props) => {
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
  const handleOnClick = (): void => {
    setIsActive((prev) => !prev);
    // inactive → activeでToastを表示する
    if (!isActive) {
      popToast();
    }
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
