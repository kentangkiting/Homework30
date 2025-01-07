import { useState } from "react";

const useValue = (val) => {
  const [value, setValue] = useState(val);
  return [value, { setValue }];
};

export default useValue;
