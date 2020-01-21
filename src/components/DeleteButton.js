import React, { memo } from 'react'
import styled from 'styled-components'

const StyledDeleteButton = styled.button`
  font-size: 15px;
`

const DeleteButton = ({ onClick }) => {
    return (
      <StyledDeleteButton
      onClick={onClick}
    >
		Delete
    </StyledDeleteButton>
    );
};

export default memo(DeleteButton);