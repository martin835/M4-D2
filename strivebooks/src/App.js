import './App.css';
import MyNavbar from './components/MyNavbar'
import MyJumbotron from './components/MyJumbotron'
import MyFooter from './components/MyFooter'
/* import LatestRelease from './components/LatestRelease' */
import BookList from './components/BookList'
import horror from './data/horror.json'
import fantasy from './data/fantasy.json'
import scifi from './data/scifi.json'


function App() {
  return (
    <div>
      <MyNavbar storeName="StriveBooks" />
      <MyJumbotron />
      <BookList books={scifi} />
      <MyFooter />
    </div>
  );
}

export default App;
