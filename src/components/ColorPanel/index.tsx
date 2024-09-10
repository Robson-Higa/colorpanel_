import { useEffect, useState } from "react";
import style from "./styles.module.css"

type Props = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
const ColorPanel = ({ red, green, blue, alpha }: Props) => {
  const [colorStyle, setColorStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    setColorStyle({
      backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`
    });
  }, [red, green, blue, alpha]);

  return <div className={style.panel} style={colorStyle}></div>;


};

export default ColorPanel;
