import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/Counter";
import { getStudent } from "../redux/Student";

const Counter = () => {
  const counter = useSelector((store) => store.counter);
  const store = useSelector((store) => store.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudent());
  }, []);

  return (
    <div>
      <h1>Counter Num: {counter.data}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>PLUS</button>
        <button onClick={() => dispatch(decrement())}>MINUS</button>
      </div>
      {store.student.map((student, idx) => {
        return (
          <Fragment key={idx}>
            <h3>
              {student.id}. {student.name}
            </h3>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Counter;
