import CountDownTimer from './components/CountDownTimer';
import './styled.css'

function App() {

  const hoursMinSecs = {days:14, hours:1, minutes: 20, seconds: 40}
  
  return (
    <div className="App">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
        
    </div>
  );
}

export default App;