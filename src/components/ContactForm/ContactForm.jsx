import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const nameId = nanoid();
  const telId = nanoid();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : name === 'phone' && setPhone(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, phone });
    setName('');
    setPhone('');
  };
  return (
    <div className={css.wraper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId}> Name</label>
        <input
          type="text"
          name="name"
          value={name}
          required
          id={nameId}
          placeholder="name"
          onChange={handleChange}
          pattern={
            "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
        />
        <label htmlFor={telId}>Number</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          required
          id={telId}
          placeholder="phone number"
          onChange={handleChange}
          pattern={
            '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
          }
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
