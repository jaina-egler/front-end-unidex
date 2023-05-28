import Footer from "../components/Footer"
import Table from "../components/Table/Table"
import THead from "../components/Table/THead"
import TBody from "../components/Table/TBody"
import Tr from "../components/Table/Tr"
import Td from "../components/Table/Td"
import Filter from "../components/Filter"
import { formatPlaca, formatDate, formatKm } from '../utils/utils.js';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Veiculos({ data, filterValues }) {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.dados.documentos.filter((item) => {
      return Object.keys(filterValues).every((fieldName) => {
        return item[fieldName].toLowerCase().includes(filterValues[fieldName].toLowerCase());
      });
    });

    setFilteredData(filtered);
  }, [data, filterValues]);

  const handleFilter = (filterValues) => {
    const queryString = new URLSearchParams(filterValues).toString();
    router.push(`/veiculos?${queryString}`);
  };

  const filterProperties = [
    { name: 'placa', label: 'Placa' },
    { name: 'motorista', label: 'Motorista' }
  ];

  return (
    <>
      <Filter data={filterProperties} filterProperties={filterProperties} onFilter={handleFilter} />
      <Table>
        <THead>
          <Tr>
            <Td>Placa</Td>
            <Td>Marca</Td>
            <Td>Modelo</Td>
            <Td>Ano</Td>
            <Td>Renavan</Td>
            <Td>Vencimento IPVA</Td>
            <Td>Km Atual</Td>
          </Tr>
        </THead>
        <TBody>
          {filteredData.map((documento) => (
            <Tr key={documento._id}>
              <Td>{formatPlaca(documento.placa)}</Td>
              <Td>{documento.marca}</Td>
              <Td>{documento.modelo}</Td>
              <Td>{documento.ano}</Td>
              <Td>{documento.renavan}</Td>
              <Td>{formatDate(documento.vencimento_ipva)}</Td>
              <Td>{formatKm(documento.km_atual)}</Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const filterValues = query;

  const response = await fetch(`http://localhost:3034/veiculos`);
  const data = await response.json();

  return {
    props: {
      data,
      filterValues,
    },
  };
}