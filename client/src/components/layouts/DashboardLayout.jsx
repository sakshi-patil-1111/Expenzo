import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Don't render anything while checking auth
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeMenu={activeMenu} />
      <div className="flex">
        <div className="max-[1000px]:hidden">
          <SideMenu activeMenu={activeMenu} />
        </div>
        <div className="grow ml-64 max-[1000px]:ml-0">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
