// Component name will always be in capitalise form
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="headerLogo"
        className='headerLogo'
      />
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
        <div className="headerNavColumnBasket">
          <ShoppingBasketIcon />
          <span className='headerNavColumnRow2 headerBasketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header;