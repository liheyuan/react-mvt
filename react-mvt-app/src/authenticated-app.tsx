import { NewsList } from "pages/news-list";
import { useAuth } from "context/auth-context";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout}>登出</button>
      <NewsList />
    </div>
  );
};
