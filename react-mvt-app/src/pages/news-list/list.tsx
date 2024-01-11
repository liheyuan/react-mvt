import dayjs from "dayjs";
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
        {
          title: "创建时间",
          dataIndex: "createdTime",
          key: "createdTime",
          render: (createdTime) => {
            return (
              <span>
                {createdTime ? dayjs(createdTime).format("YYYY-MM-DD") : "无"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};
