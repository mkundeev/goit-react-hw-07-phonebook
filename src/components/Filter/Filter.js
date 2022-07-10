import s from './Filter.module.css';

function Filter({ changeFilter }) {
  return (
    <div className={s.filter}>
      <label htmlFor="filter" className={s.title}>
        {' '}
        Find contacts by name
      </label>
      <input
        className={s.input}
        id="filter"
        onChange={e => changeFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;
