import { useEffect, useState } from "react";

// prettier-ignore
export const isFalsy = (value: any) => value === 0 ? false : !value;

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay: number = 200) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // set value after delay
    const timeout = setTimeout(() => setDebounceValue(value), delay);

    // clear called after the next useEffect call
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

export const userArray = <A>(initArray: A[]) => {
  const [value, setValue] = useState(initArray);
  return {
    value,
    setValue,
    add: (item: A) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
