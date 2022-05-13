import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import s from './SearchForm.module.scss';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') return alert('Please, enter the name of movie title');

    navigate({
      search: 'query=' + query,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        className={s.input}
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit" className={s.btn}>
        <GoSearch className={s.icon} />
      </button>
    </form>
  );
};

export default SearchForm;
