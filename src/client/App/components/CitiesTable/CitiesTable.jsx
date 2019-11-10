import React from 'react';
import { TableRow } from '../TableRow/TableRow';
import { Weather } from '../Weather/Weather';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody
} from './styledComponents';

const CitiesTable = (props) => {
  const { cities } = props;
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Choose city</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cities.map(item => (
            <TableRow
              key={item.id}
              item={item}
            />
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default CitiesTable;
