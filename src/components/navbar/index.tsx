import logoImg from '../../assets/pokemon-logo.svg';
import './styles.css';

export function Navbar() {
  
  return (
    <header>
      <nav>
        <img src={logoImg} alt="Pokemon" />


        {/* BUTTON SEARCH */}
        <form className="search">
          <input type="text" placeholder="Search" className="search__input" />
          <button type="button" className="search__button">
            <i className="ri-search-2-line"></i>
          </button>
		    </form>

      </nav>
    </header>
  );
}