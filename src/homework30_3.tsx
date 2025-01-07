import React, { useCallback, useState } from "react";

const Jumlah = (props) => {
  const sum = () => {
    if (props.arr) {
      return props.arr.reduce((total, num) => total + num, 0);
    }
  };

  return (
    <div>
      <p>Jumlah: {sum()}</p>
      <button onClick={props.addData}>add</button>
    </div>
  );
};

const JumlahView = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const increment = useCallback(() => {
    setData((t) => [...t, 5]);
  }, []);

  return (
    <>
      {data}
      <Jumlah arr={data} addData={increment} />
    </>
  );
};

export default JumlahView;
