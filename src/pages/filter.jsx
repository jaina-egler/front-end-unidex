import React, { useState } from 'react';
import Filter from "../components/Filter";
import Table from "../components/Table/Table";
import THead from "../components/Table/THead";
import TBody from "../components/Table/TBody";
import Tr from "../components/Table/Tr";
import Td from "../components/Table/Td";


export default function Home() {
  const data = [
    { placa: 'ASD4536', motorista: 'Carlos' },
    { placa: 'VUI4657', motorista: 'Moisés' }
  ];

  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filterValues) => {
    const filtered = data.filter((item) => {
      // Realize a lógica de filtragem com base nos campos e valores de filtro
      // Acesso aos valores usando item[field.name]
      return Object.keys(filterValues).every((fieldName) => {
        return item[fieldName].toLowerCase().includes(filterValues[fieldName].toLowerCase());
      });
    });
  
    setFilteredData(filtered);
  };
  
  return (
    <>
      <div>
      
      <Filter data={data} onFilter={handleFilter} />
        <Table>
          <THead>
            <Tr>
              <Td>Placa</Td>
              <Td>Motorista</Td>
            </Tr>
          </THead>
          <TBody>
          {filteredData.map((item, index) => (
            <Tr key={index}>
              <Td>{item.placa}</Td>
              <Td>{item.motorista}</Td>
            </Tr>
          ))}
        </TBody>

        </Table>
      </div>
    </>
  );
}
