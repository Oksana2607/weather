import React from 'react';
import { Row, RowCity, StyledLink } from './styledComponents';

export const TableRow = (props) => {
  const { item } = props;

  return (
    <Row>
      <RowCity>
        <StyledLink to={`/${item.city}`}>
          {item.city}
        </StyledLink>
      </RowCity>
    </Row>
  );
};
