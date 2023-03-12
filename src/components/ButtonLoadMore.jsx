export const ButtonLoadMore = ({ loadMore, buttonName }) => {
  return (
    <button onClick={loadMore} type="button" className="load-more">
      {buttonName}
    </button>
  );
};
