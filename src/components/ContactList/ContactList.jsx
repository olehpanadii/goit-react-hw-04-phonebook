import { FaPhoneAlt, FaUserTimes } from 'react-icons/fa';
import { ContactItem, ContactNumber, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <h3>{name}</h3>
          <ContactNumber>
            <p>
              <FaPhoneAlt /> {number}
            </p>
            <DeleteBtn onClick={() => onDelete(id)}>
              Delete <FaUserTimes />
            </DeleteBtn>
          </ContactNumber>
        </ContactItem>
      ))}
    </ul>
  );
};
