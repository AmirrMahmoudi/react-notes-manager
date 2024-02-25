import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export function withAuthRequired(Component) {
  return function ProtectedComponent() {
    const navigate = useNavigate();
    const user = useSelector((store) => store.authSlice.auth.user);
    useEffect(() => {
      if (!user) {
        navigate("/signin");
      }
    }, [user]);

    return user && <Component />;
  };
}
