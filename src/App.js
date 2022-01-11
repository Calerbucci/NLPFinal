import './App.css';
import CustomizedInputBase from './Searchbar'
import DenseAppBar from './Appbar'

function App() {

  return (
    <div>
      <DenseAppBar/>
      <div className="App">
       <CustomizedInputBase/>
      </div>
    </div>
  );
}

export default App;
