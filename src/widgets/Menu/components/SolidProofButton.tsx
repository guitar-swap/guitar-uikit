import React from "react";
import styled from "styled-components";
import RugDocAudit from "../icons/SolidProof";

interface AuditProps {
  link: string;
}

const StyledAudit = styled.div`
  margin-bottom: 5px;
  text-align: center;

  svg {
    width: 100%;
  }
`;

const SolidProofButton: React.FC<AuditProps> = ({ link }) => {
  return (
    <StyledAudit>
      <a href={link} aria-label="AuditLink" target="_blank">
        <RugDocAudit />
      </a>
    </StyledAudit>
    )
};

export default SolidProofButton;
