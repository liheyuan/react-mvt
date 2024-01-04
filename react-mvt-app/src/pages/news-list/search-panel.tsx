import { Input, Form, Select } from "antd";

export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    title: string;
    userId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form action="">
      <Input
        type="text"
        value={param.title}
        onChange={(evt) =>
          setParam({
            ...param,
            title: evt.target.value,
          })
        }
      ></Input>
      <Select
        value={param.userId}
        onChange={(value) =>
          setParam({
            ...param,
            userId: value,
          })
        }
      >
        <Select.Option value={""}>作者</Select.Option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </Select>
    </Form>
  );
};
