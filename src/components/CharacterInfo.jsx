export const CharacterInfo = ({ character }) => {
  const { name, gender, status, species, origin, type, image } = character;

  return (
    <section className="character-section">
      <div className="character-container character">
        <h1 className="hidden">Character page</h1>
        <div className="character-wrap">
          <div className="image-wrap">
            <img
              className="character-image"
              src={image}
              alt="rick and morty logo"
            />
          </div>

          <h2 className="hero-title">{name}</h2>
          <p className="hero-description">Informations</p>

          <ul className="features-list">
            <li className="features-item">
              <p className="features-title">Gender</p>
              <p className="features-subtitle"> {gender}</p>
            </li>
            <li className="features-item">
              <p className="features-title">Status</p>
              <p className="features-subtitle">{status}</p>
            </li>
            <li className="features-item">
              <p className="features-title">Specie</p>
              <p className="features-subtitle">{species}</p>
            </li>
            <li className="features-item">
              <p className="features-title">Origin</p>
              <p className="features-subtitle">{origin.name}</p>
            </li>
            <li className="features-item">
              <p className="features-title">Type</p>
              <p className="features-subtitle">{type || "unknown"}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
