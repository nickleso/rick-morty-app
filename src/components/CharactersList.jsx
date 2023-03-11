import { Link, useLocation } from "react-router-dom";

export const CharactersList = ({ characters }) => {
  const location = useLocation();

  return (
    <section className="section ">
      <div className="container home-container">
        <h1 className="hidden">Rick and Morty application</h1>
        <ul className="home-list">
          {characters.map(({ id, name, species, image }) => (
            <li className="home-item" key={id}>
              <Link to={`character/${id}`} state={{ from: location }}>
                <img src={image} alt="rick and morty logo" width="240px" />
                <div className="item-wrap">
                  <p className="item-title">{name}</p>
                  <p className="item-description"> {species}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
