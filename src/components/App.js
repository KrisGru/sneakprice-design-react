import '../scss/main.scss';
import TopBar from './TopBar.js';
import Search from './Search';
import TrendySneakers from './TrendySneakers';
import SneakerList from './SneakerList';
import Footer from './Footer';

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
