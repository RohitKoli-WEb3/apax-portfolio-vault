import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./PageLayout.css";

function PageLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Navbar />

        {children}
      </div>
    </div>
  );
}

export default PageLayout;