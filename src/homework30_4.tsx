import React, { useMemo, useState } from "react";

const Jumlah = (props) => {
  const sum = useMemo(() => {
    if (props.arr) {
      return props.arr.reduce((total, num) => total + num, 0);
    }
  }, [props.arr]);

  return (
    <div>
      <p>Jumlah: {sum}</p>
    </div>
  );
};

const JumlahMemo = () => {
  const [count, setCount] = useState([]);
  const onHandleClick = () => {
    setCount((arr) => [...arr, 1]);
  };
  return (
    <>
      <Jumlah arr={count} />
      <div>
        <button type="button" onClick={onHandleClick}>
          add
        </button>
      </div>
    </>
  );
};

export default JumlahMemo;
