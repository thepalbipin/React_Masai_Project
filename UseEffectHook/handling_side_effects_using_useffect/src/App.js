import './App.css';
import FetchData from './component/FetchData';
// import Movemouse from './component/Movemouse';
import DocumentTitle from './component/DocumentTitle';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <FetchData />
        {/* <Movemouse /> */}
        <DocumentTitle />
      </header>
    </div>
  );
}

export default App;


