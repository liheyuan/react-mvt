import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useDebounce, useMount } from "../../utils";
import qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;

export const NewsList = () => {
  const [param, setParam] = useState({
    name: "",
    userId: "",
  });

  const debouncedParam = useDebounce(param, 200);

  const [list, setList] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/news?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      },
    );
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
