import { Link } from "react-router-dom";

export const CharactersList = ({ characters }) => {
  return (
    <section>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {characters.map(({ id, name, species, image }) => (
          <li key={id}>
            <Link
              to={`character/${id}`}
              style={{
                color: "#2c2e30",
              }}
            >
              <img src={image} alt="rick and morty logo" width="240px" />
              <p>{name}</p>
              <p>{species}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
