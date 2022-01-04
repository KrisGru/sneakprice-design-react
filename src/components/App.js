import logo from '../assets/Sneakprice.png';
import '../scss/main.scss';
import TopBar from './TopBar.js';
import Search from './Search';
import TrendySneakers from './TrendySneakers';
import SneakerList from './SneakerList';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
