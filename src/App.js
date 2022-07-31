// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Houses from './components/Houses';
import Rent from './components/Rent';



function App() {
  return (
    <div>
      <Header />
      <Houses />
      <Rent />
    </div>
  );
}

export default App;
