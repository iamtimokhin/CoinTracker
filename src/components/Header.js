const Header = ({ search, setSearch }) => {
  return (
    <>
      <header className="header header--wrapper">
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__link">All Tracks</li>
          </ul>
        </nav>
        <input
          placeholder="Choose coin"
          className="header__search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
    </>
  );
};

export default Header;
