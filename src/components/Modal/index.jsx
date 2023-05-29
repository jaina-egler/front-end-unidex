import React, { useState } from 'react';
import styles from './styles.module.css';
import { Button } from "@nextui-org/react";

const Modal = ({ isOpen, onClose, modalProperties, onSubmit, children }) => {
  const [formValues, setFormValues] = useState({});

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          Fechar
        </button>
        <form onSubmit={handleSubmit}>
          {modalProperties.map(({ name, label }) => (
            <div key={name}>
              <label>{label}</label>
              <input
                type="text"
                name={name}
                value={formValues[name] || ''}
                onChange={handleChange}
              />
            </div>
          ))}
          <Button type="submit">Criar</Button>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Modal;