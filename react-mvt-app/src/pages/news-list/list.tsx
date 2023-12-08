import { User } from "./search-panel";

interface News {
  id: number;
  title: string;
  userId: number;
}

interface ListProps {
  list: News[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>作者</th>
        </tr>
      </thead>
      <tbody>
        {list.map((news) => (
          <tr key={news.id}>
            <td>{news.title}</td>
            <td>{users.find((user) => user.id === news.userId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
