import { Collapse, Button } from "@nextui-org/react";
import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from "../Input";

export default function Filter({ data, filterProperties, onFilter }) {
  const [filterText, setFilterText] = useState('');

  const handleText = (formData) => {
    if (Object.values(formData).every(value => value === '')) {
      setFilterText('');
    } else {
      const concatenatedText = Object.entries(formData)
        .map(([key, value]) => {
          const property = filterProperties.find(prop => prop.name === key);
          return `${property.label}: ${value}`;
        })
        .join(' | ');

      setFilterText(concatenatedText);
    }
  };

  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset();
  }, [reset]);

  const handleFilterSubmit = (formData) => {
    const filterValues = {};
    Object.entries(formData).forEach(([fieldName, value]) => {
      if (value !== "") {
        filterValues[fieldName] = value;
      }
    });
  
    onFilter(filterValues);
    handleText(formData);
  };

  const renderInput = ({ field }) => {
    const property = filterProperties.find(prop => prop.name === field.name);

    return (
      <Input
        label={property.label}
        id={field.name}
        name={field.name}
        type="text"
        placeholder={property.label}
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
      />
    );
  };

  return (
    <div className={styles.box}>
      <Collapse.Group>
        <Collapse className={styles.component_name} title="Filtros" subtitle={"Filtros ativos: " + filterText.toUpperCase()}>
          <form onSubmit={handleSubmit(handleFilterSubmit)}>
            <div className={styles.inputs}>
              {filterProperties.map((property) => (
                <Controller
                  key={property.name}
                  name={property.name}
                  control={control}
                  defaultValue=""
                  render={renderInput}
                />
              ))}
            </div>
            <Button className={styles.button} type="submit">Filtrar</Button>
          </form>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}
