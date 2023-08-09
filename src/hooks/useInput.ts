import { ChangeEvent, useState } from "react";

type InputHookReturnType = [string, (e: ChangeEvent<HTMLInputElement>) => void, () => void];

const useInput = (): InputHookReturnType => {
  const [value, setValue] = useState("");

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, handler, resetValue];
};

export default useInput;
