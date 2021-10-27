import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
     <Svg viewBox="0 0 180 180" {...props}>
     <image href='/images/guitarimg/loading.png'/>
    </Svg>
  );
};

export default Icon;
