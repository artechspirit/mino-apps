import React from "react";

enum Size {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

enum ButtonType {
  PRIMER = "primer",
  SEKUNDER = "sekunder",
}

type ButtonProps = {
  size?: string;
  type?: string;
  label: string;
};

const Button: React.FC<ButtonProps> = ({
  size = Size.MD,
  type = ButtonType.PRIMER,
  label = "Button",
}) => {
  const classes = [
    "btn",
    `btn-${size}`,
    type === ButtonType.PRIMER ? "bg-minoPrimer" : "bg-white",
    "active:bg-minoSekunder",
    "border-solid",
    type === ButtonType.PRIMER ? "border-0" : "border-1",
    "border-minoPrimer",
    "hover:border-MinoSekunder",
    "active:border-minoSekunder",
    type === ButtonType.PRIMER
      ? "hover:bg-minoSekunder"
      : "hover:bg-minoPrimer",
    type === ButtonType.PRIMER ? "text-white" : "text-minoPrimer",
    type === ButtonType.SEKUNDER && "hover:text-white",
    size === Size.XS ? "h-[26px]" : "h-[42px]",
    size === Size.XS ? "min-h-[26px]" : "min-h-[42px]",
    "uppercase",
    "rounded-full",
    `text-${size}`,
    type === "primer" ? "font-bold" : "font-normal",
  ];
  if (type === ButtonType.SEKUNDER) {
    classes.push("btn-outline");
  }

  return <button className={classes.join(" ")}>{label}</button>;
};

export default Button;
