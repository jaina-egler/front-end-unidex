import Footer from "../components/Footer";
import Table from "../components/Table/Table";
import THead from "../components/Table/THead";
import TBody from "../components/Table/TBody";
import Tr from "../components/Table/Tr";
import Td from "../components/Table/Td";
import Filter from "../components/Filter";
import { formatPlaca, formatDate, formatKm } from '../utils/utils.js';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import errorImage from '../../public/erro-suporte.png';
import Image from "next/image";
import Modal from "../components/Modal";


export default function Veiculos({ data, filterValues }) {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);
  
  const [loadingError, setLoadingError] = useState(false);
  const [modalProperties, setModalProperties] = useState([]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setModalProperties(properties);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (formData) => {
    fetch('http://localhost:3034/veiculos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filterProperties = [
    { name: 'placa', label: 'Placa' },
    { name: 'marca', label: 'Marca' }
  ];
  const properties = [
    { name: 'placa', label: 'Placa' },
    { name: 'marca', label: 'Marca' },
    { name: 'modelo', label: 'Modelo' },
    { name: 'ano', label: 'Ano' },
    { name: 'renavan', label: 'Renavan' },
    { name: 'vencimento_ipva', label: 'Vencimento do IPVA' },
    { name: 'km_atual', label: 'KM atual' }
  ]

  return (
    <>
      <Filter data={filterProperties} filterProperties={filterProperties} onFilter={handleFilter} />
      <button onClick={handleOpenModal}>Abrir Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalProperties={modalProperties}
        onSubmit={handleModalSubmit}
      >
      </Modal>
      {loadingError ? (
        <div className="display: flex; justify-content: center;"> 
          <Image src={errorImage} alt="Mensagem de erro do sistema" />
        </div>
      ) : (
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
      )}
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
