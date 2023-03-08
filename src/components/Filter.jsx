export const Filter = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="filter"
          autoComplete="off"
          autoFocus
          placeholder="Filter by name..."
        />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};
