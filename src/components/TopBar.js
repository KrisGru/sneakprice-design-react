import Select from './reusable/Select.js';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/Sneakprice.png'

const TopBar = () => (
  <div className="bgTopBar">
    <nav className="navTopBar">
      <ul className="topBar">
        <li className="topBar__logo">
          <a href="./" className=""><img src={logo} alt="logo"/></a>
        </li>
        <li className="topBar__tabs">
          <a href="./"><BsFillLightningChargeFill className="icon"/> feautured steals</a>
          <a href="./"><FaShoppingCart className="icon"/> Verified stores</a>
        </li>
        <li className="topBar__variables">
          <Select label="CURRENCY" name="currency" option1="USD" option2="GBP" option3="EUR" option4="PLN" />
          <Select label="Sizes" name="sizes" option1="EU" option2="UK" option3="US"/>
        </li>
      </ul>
    </nav>
  </div>
)

export default TopBar;
