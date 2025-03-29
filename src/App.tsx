import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { menuItems } from "./data/sidebar";

const App = () => {
  return (
    <>
      <Sidebar menuItems={menuItems} />

      <Header />
    </>
  );
};

export default App;
