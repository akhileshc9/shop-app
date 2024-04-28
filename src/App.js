import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductComponent from './components/ProductComponent';
import {useRoutes} from 'react-router-dom'
import { routes } from './routes'
function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Header/>
      {element}
    </div>
  );
}

export default App;
