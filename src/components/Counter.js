import { useSelector, useDispatch } from "react-redux";
import classes from './Counter.module.css';
import { counterActions } from './../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increse(5))
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrese(5))
  };
  const resetHandler = () => {
    dispatch(counterActions.reset)
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <div>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decreaseHandler}>Decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
