import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axiosInstance from "../utils/axiosInstance.js";
import { API_PATHS } from "../utils/apiPaths";

export const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        updateUser(JSON.parse(storedUser));
      } else {
        // If no stored user but we have a token, fetch user info
        const fetchUserInfo = async () => {
          try {
            const response = await axiosInstance.get(
              API_PATHS.AUTH.GET_USER_INFO
            );
            if (response.data) {
              updateUser(response.data);
              localStorage.setItem("user", JSON.stringify(response.data));
            }
          } catch (error) {
            console.error("Failed to fetch user info:", error);
            clearUser();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
          }
        };
        fetchUserInfo();
      }
    }
  }, [user, updateUser, clearUser, navigate]);
};
