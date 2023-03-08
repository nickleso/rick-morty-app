export const CharacterInfo = ({ character }) => {
  const { name, gender, status, species, origin, type, image } = character;

  return (
    <section>
      <div>
        <img src={image} alt="rick and morty logo" width="300px" />
        <h2>{name}</h2>
        <p>Informations</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <p>Specie: {species}</p>
        <p>Origin: {origin.name}</p>
        <p>Type: {type || "unknown"}</p>
      </div>
    </section>
  );
};
