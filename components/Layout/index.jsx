import { Sidebar } from '../Sidebar/index.jsx';
import { Navheader } from '../Navheader/index.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navheader />
      </header>

      <nav>
        <Sidebar />
      </nav>
      {children}
    </>
  );
};

export { Layout };
