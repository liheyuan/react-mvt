import { User } from "./search-panel";
import { Table } from "antd";

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
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "title",
          key: "title",
          sorter: (a: News, b: News) => a.title.localeCompare(b.title),
        },
        {
          title: "作者",
          dataIndex: "userId",
          key: "userId",
          render: (userId: number) => {
            return (
              <span>{users.find((user) => user.id === userId)?.name}</span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};
