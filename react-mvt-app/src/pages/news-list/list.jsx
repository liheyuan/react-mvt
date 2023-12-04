export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((news) => (
          <tr key={news.id}>
            <td>{news.name}</td>
            <td>{users.find((user) => user.id === news.userId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
