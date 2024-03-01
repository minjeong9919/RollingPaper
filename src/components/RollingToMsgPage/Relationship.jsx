import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from './Select';
import { relationshList } from './SelectList';

function Relationship({
  isOpenRelationship,
  setIsOpenRelationship,
  relationshipValue,
  onRelationshipValueHandle,
}) {
  return (
    <RelationshipContentDiv>
      <span>상대와의 관계</span>
      <Select
        SelectList={relationshList}
        isOpen={isOpenRelationship}
        setIsOpen={setIsOpenRelationship}
        value={relationshipValue}
        onChange={onRelationshipValueHandle}
      />
    </RelationshipContentDiv>
  );
}

Relationship.propTypes = {
  isOpenRelationship: PropTypes.bool.isRequired,
  setIsOpenRelationship: PropTypes.func.isRequired,
  relationshipValue: PropTypes.string.isRequired,
  onRelationshipValueHandle: PropTypes.func.isRequired,
};

export default Relationship;

const RelationshipContentDiv = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.2rem;

  & > span {
    color: var(--gray900);
    font-size: var(--font24);
    font-weight: var(--bold);
    line-height: 1.5;
    letter-spacing: -0.024rem;
  }
`;
