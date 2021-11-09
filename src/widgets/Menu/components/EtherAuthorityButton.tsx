import React from "react";
import styled from "styled-components";
import EtherAuthorityIcon from "../icons/EtherAuthority";

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

const EtherAuthorityButton: React.FC<AuditProps> = ({ link }) => {
  return (
    <StyledAudit>
      <a href={link} aria-label="AuditLink" target="_blank">
        <EtherAuthorityIcon />
      </a>
    </StyledAudit>
    )
};

export default EtherAuthorityButton;
