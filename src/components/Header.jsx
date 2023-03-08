import logo from "../images/main-logo.png";

export const Header = () => {
  return (
    <div>
      <header>
        <h1>Rick and Morty application</h1>
        <img src={logo} alt="rick and morty logo" width="600px" />
      </header>
    </div>
  );
};
