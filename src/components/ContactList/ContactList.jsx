import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  const elem = contacts.map(
    ({ id, name, phone }) =>
      (name || phone) && (
        <li key={id}>
          {name}: {phone}
          <button
            className={css.btn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            delete
          </button>
        </li>
      )
  );
  return <ol> {elem}</ol>;
};
