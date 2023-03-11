import { Link } from "react-router-dom";

export const CharacterPageHeader = ({ backLinkHref }) => {
  return (
    <header className="character-header">
      <div className="character-container">
        <Link className="back-link" to={backLinkHref}>
          <svg className="back-icon" viewBox="0 0 32 32" width="16" height="16">
            <path d="M32 14H7.66L18.84 2.82 16 0 0 16l16 16 2.82-2.82L7.66 18H32v-4z" />
          </svg>
          GO BACK
        </Link>
      </div>
    </header>
  );
};
