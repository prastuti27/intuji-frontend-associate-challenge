import Sidebar from './components/sidebar';
import { menuItems } from './data/sidebar';

const App = () => {
  return (
    <>
      <Sidebar menuItems={menuItems} />
    </>
  );
};

export default App;
