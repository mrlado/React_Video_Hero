import logo from './logo.svg';
import './App.css';

import Video from './Assats/Earth1.mp4'

function App() {
  return (
    <div className='main w-full h-full'>
      <div className='overlayer'></div>
        <video autoPlay loop muted id='video w-full h-full object-cover'>
          <source src={Video}/>
        </video>
        <div className='content absolute w-full h-full top-0 flex flex-column justify-center items-center z-2 '>
            <h1>Welcome</h1>
            <p>Lado Merabishvili</p>
        </div>
    </div>
  );
}

export default App;
