import { useNavigate } from "react-router-dom";
import useToken from "./useToken";

function Logout() {
  const { token, userName, removeUser, saveUser } = useToken();

  const navigate = useNavigate();

  const logout = () => {
    removeUser();
    navigate("/");
  };

  return (
    <button className="header-button" onClick={logout}>
      Kirjaudu ulos
    </button>
  );
}

export default Logout;
