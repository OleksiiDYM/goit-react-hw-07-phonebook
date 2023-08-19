import { useState } from 'react';
import {
  ContactFormWrapper,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const createContact = contact => dispatch(addContact(contact));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.error(`Name - ${name} is not defined`);
    }
  };

  const onAddToContactSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    )
      alertmessage(name);
    else createContact({ name, number });

    setName('');
    setNumber('');
  };

  const alertmessage = name =>
    alert(`${name} or ${number} is already in contacts`);

  return (
    <ContactFormWrapper onSubmit={onAddToContactSubmit}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput
        type="text"
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
      />
      <FormLabel htmlFor="tel">Number</FormLabel>
      <FormInput
        type="tel"
        id="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
      />
      <FormButton type="submit">Add to contact</FormButton>
    </ContactFormWrapper>
  );
};

export default ContactForm;
