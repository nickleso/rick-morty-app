export const ButtonLoadMore = ({ loadMore, buttonName }) => {
  return (
    <div className="ButtonWrap">
      <button onClick={loadMore} type="button" className="button">
        {buttonName}
      </button>
    </div>
  );
};
