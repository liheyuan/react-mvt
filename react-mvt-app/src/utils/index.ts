import { useEffect, useState } from "react";

// prettier-ignore
export const isFalsy = (value: any) => value === 0 ? false : !value;

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
