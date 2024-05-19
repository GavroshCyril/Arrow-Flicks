import { Outlet } from "react-router-dom";
import { Sidebar } from "@components/Sidebar";
import "./sidebarLayout.scss";

export const SidebarLayout = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <Sidebar />
      <div style={{ display: "flex", flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};
