import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useDebounce, useMount } from "../../utils";
import { useHttp } from "../../utils/http";

export const NewsList = () => {
  const [param, setParam] = useState({
    title: "",
    userId: "",
  });

  const debouncedParam = useDebounce(param, 200);

  const [list, setList] = useState([]);

  const [users, setUsers] = useState([]);

  const client = useHttp();

  useEffect(() => {
    client("news", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
