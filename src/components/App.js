import '../scss/main.scss';
import TopBar from './TopBar.js';
import Search from './Search';
import TrendySneakers from './TrendySneakers';
import SneakerList from './SneakerList';
import Footer from './Footer';
import logo from '../assets/Sneakprice.png';

function App() {
  return (
    <div className="App">
      <TopBar logo={logo}/>
      <Search />
      <TrendySneakers />
      <SneakerList />
      <Footer logo={logo}/>
    </div>
  );
}

export default App;
