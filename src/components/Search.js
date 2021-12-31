import { useState } from 'react';
import shoppingBags from '../assets/Shopping Bags.png';
import { BiSubdirectoryLeft } from 'react-icons/bi';
import { GrFormSearch } from 'react-icons/gr';



const Search = () => {
  const [input, setInput] = useState('');
  return (
    <div className="bgSearch bg">
      <div className="search">
        <div className="search__title">
          <p>FIND THE BEST DEALS</p>
          <h2><img src={shoppingBags} alt="icon shopping bags"/><strong> Sneaker price comparison engine</strong></h2>
        </div>
        <div className="search__containerInput">
          <div>
            <p>Search for any sneakers and find the best prices online</p>
            <GrFormSearch />
            <BiSubdirectoryLeft className="submitIcon" onChange={(e)=>setInput(e.target.value)} onClick={(event) => {alert('Your nike wait for you in another shop'); setInput("")}}/>
            <input className="input1" value={input} type="text"
              placeholder="Nike air..."
              onChange={(e)=>setInput(e.target.value)}
              onKeyPress={(event) => {if(event.key=== 'Enter'){alert('Your nike wait for you in another shop'); setInput("")}}}/>
            <div className="search__lastChoosen">
              <section>RECENTLY SEARCHED </section>
              <p onClick={() => alert("Choose another store")}>Yeezy 350</p><p onClick={() => alert("Choose another store")}>Jordan Black</p><p onClick={() => alert("Choose another store")}>Alexander McQueen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
