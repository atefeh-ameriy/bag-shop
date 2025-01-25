import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

function Layouts() {
  return (
    <>
      <div className="app" >
        <Sidebar />
        <main className="content">
        <Navbar />
        <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layouts;
