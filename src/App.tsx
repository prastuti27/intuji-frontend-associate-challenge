import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { menuItems } from "./data/sidebar";

const App = () => {
  return (
    <>
      <aside className="sidebar d-none d-xl-block ">
        <Sidebar menuItems={menuItems} />
      </aside>
      <header className="header">
        <Header />
      </header>
      <main>
        <Dashboard />
      </main>
    </>
  );
};

export default App;
