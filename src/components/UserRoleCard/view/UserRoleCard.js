import React from "react";
import PropTypes from "prop-types";
import { role } from "../../../const";
import { UserRoleCardContainer, IconBlock, Selected, Title } from "../style";

const UserRoleCard = ({ onClick, accountRole, isSelected }) => {
  const renderIcon = accountRole => {
    switch (accountRole) {
      case role.DOCTOR:
        return <i className="project-icon icon-doctor" />;

      case role.PATIENT:
        return <i className="project-icon icon-patient" />;

      default:
        throw new Error("Account can't match!");
    }
  };

  return (
    <UserRoleCardContainer isSelected={isSelected} onClick={onClick}>
      <IconBlock>{renderIcon(accountRole)}</IconBlock>
      <Title>{accountRole}</Title>
      {isSelected && (
        <Selected>
          <i className="fas fa-check" />
        </Selected>
      )}
    </UserRoleCardContainer>
  );
};

UserRoleCard.propsTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  accountRole: PropTypes.string
};

export default UserRoleCard;
