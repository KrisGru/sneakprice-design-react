
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

const TopBar = () => (
  <div className="bgTopBar">
    <nav className="navTopBar">
      <ul className="topBar">
        <li className="topBar__logo">
          <img src="./" alt="" className="img"/>
          <p>logo sneakerprice</p>
        </li>
        <li className="topBar__tabs">
            <a href="./"><BsFillLightningChargeFill/>feautured steals</a>
            <a href="./"><FaShoppingCart/> Verified stores</a>
        </li>
        <li className="topBar__variables">
          <label for="currency-select">Currency</label>
          <select name="currencies" id="currency-select">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="PLN">PLN</option>
          </select>
          <label for="size-select">Sizes</label>
          <select name="sizes" id="size-select">
              <option value="EU">EU</option>
              <option value="UK">UK</option>
              <option value="US">US</option>
          </select>
        </li>
      </ul>
    </nav>
  </div>
)

export default TopBar;
