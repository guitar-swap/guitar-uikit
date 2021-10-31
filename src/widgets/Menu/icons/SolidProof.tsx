import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface Props extends SvgProps {
}

const SolidProof: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 418 113" {...props}>
      <image width="418" height="113" href='/images/guitarimg/solidproof.png' />
    </Svg>
  )
};

export default SolidProof;
