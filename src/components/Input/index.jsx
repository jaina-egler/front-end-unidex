import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import icone from '../Input/calendar_today.svg';

export default function Input({ label, id, name, type, placeholder, width, showIcon, value, onChange }) {
  return (
    <label className={styles.label} htmlFor={id}>
      {label}
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        style={{ width: width }}
        value={value}
        onChange={onChange}
      />
      {showIcon && <Image src={icone} alt="" width={16} height={16} className={styles.icone} />}
    </label>
  );
}
