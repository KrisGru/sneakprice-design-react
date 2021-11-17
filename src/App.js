import './scss/main.scss';
import TopBar from './components/TopBar.js';
import Search from './components/Search';
import TrendySneakers from './components/TrendySneakers';
import SneakerList from './components/SneakerList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <TopBar />
        <Search />
        <TrendySneakers />
        <SneakerList />
        <Footer />
      </div>
    </>
  );
}

export default App;
