import './App.css';
import Openmodel from './Component/Openmodel';
import Data from './Component/DataToBePrinted.json'
Data.map((e)=>{console.log(e.engineering)})
function App() {
  return (
   <>
   <Openmodel></Openmodel>
   </>
  );
}

export default App;
