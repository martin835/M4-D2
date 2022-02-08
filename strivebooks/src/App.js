import './App.css';
import MyNavbar from './components/MyNavbar';
import MyJumbotron from './components/MyJumbotron'
import MyFooter from './components/MyFooter'
import LatestRelease from './components/LatestRelease'

function App() {
  return (
    <div >
      <MyNavbar/>
      <MyJumbotron/>
      <LatestRelease/>
      <MyFooter/>
    </div>
  );
}

export default App;
