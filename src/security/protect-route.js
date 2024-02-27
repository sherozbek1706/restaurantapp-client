import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const ProtectRoute = ({ roles, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      const { user } = jwtDecode(token);

      if (!token || !roles.includes(user.role)) {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  }, [children]);
  return children;
};

export default ProtectRoute;
