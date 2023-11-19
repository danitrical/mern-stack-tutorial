// Component name will always be in capitalise form
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="headerLogo"
          className='headerLogo'
        />
      </Link>
      <div className="headerSearch">
        <input
          type="text"
          className="headerSearchInput"
        />
        <SearchIcon className='headerSearchIcon'/>
      </div>
      <div className='headerRightNav'>
        <div className="headerNavColumn">
          <span className='headerNavColumnRow1'>Hello Guest</span>
          <span className='headerNavColumnRow2'>Sign In</span>
        </div>
        <div className="headerNavColumn">
          <span className='headerNavColumnRow1'>Return</span>
          <span className='headerNavColumnRow2'>& Orders</span>
        </div>
        <div className="headerNavColumn">
          <span className='headerNavColumnRow1'>Your</span>
          <span className='headerNavColumnRow2'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="headerNavColumnBasket">
            <ShoppingBasketIcon />
            <span className='headerNavColumnRow2 headerBasketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;