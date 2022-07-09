import './App.css';
import Barchart from './componets/Barchart';
import Feeds from './componets/Feeds';
import Linechart from './componets/Linechart';
import Piechart from './componets/Piechart';
import Rbarchart from './componets/Rbarchart';
import Rlinechart from './componets/Rlinchart';



function App() {
  return (
    <div>
    {/* <div className='App'>
      <div className='bar'>
        <Barchart />
      </div>
      <div className='line'>
      <Linechart/>
        </div>
        <div className='pie'>
          <Piechart /> */}
        {/* </div> */}
    {/* </div> */}
    {/* <Rbarchart/>
    <Rlinechart/> */}
    {/* <Linechart/> */}
    <Feeds />
    </div>
  );
}

export default App;
