import './scss/main.scss';
import TopBar from './components/TopBar.js';
import Search from './components/Search';
import TrendySneakers from './components/TrendySneakers';
import MainList from './components/MainList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <TopBar />
        <Search />
        <TrendySneakers />
        <MainList />
        <Footer />
      </div>
    </>
  );
}

export default App;
