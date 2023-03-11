import { MdSearch } from "react-icons/md";

export const Filter = ({ onSubmit }) => {
  return (
    <div className="container">
      <form className="filter-form" onSubmit={onSubmit}>
        <input
          className="filter-input"
          type="text"
          name="filter"
          autoComplete="off"
          placeholder="Filter by name..."
        />
        <button type="submit">
          <MdSearch size={20} color="grey" />
        </button>
      </form>
    </div>
  );
};
