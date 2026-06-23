import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function PageLayout({ children }) {
  return (
    <div>
      <Sidebar />

      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default PageLayout;