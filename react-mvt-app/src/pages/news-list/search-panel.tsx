export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    userId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <form action="">
      <input
        type="text"
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value,
          })
        }
      ></input>
      <select
        value={param.userId}
        onChange={(evt) =>
          setParam({
            ...param,
            userId: evt.target.value,
          })
        }
      >
        <option value={""}>作者</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
