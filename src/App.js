import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/Slice';

function App() {
  const { value } = useSelector((state) => state.counter)
  // value is from slice in initialState
  // counter is from store
  const dispatch = useDispatch()
  return (
    <div className="App">
     <h1>{value}</h1>
     <button onClick={() => dispatch(increment())}>increment +</button>
     <button onClick={() => dispatch(decrement())}>decrement -</button>
     <br/>
     <button onClick={() => dispatch(incrementByAmount(30))}>by amount</button>
    </div>
  );
}

export default App;
