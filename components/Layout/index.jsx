import { Sidebar } from '../Sidebar/index.jsx';
import { Navheader } from '../Navheader/index.jsx';
import { Footer } from '../Footer/index.jsx';

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

      <Footer />
    </>
  );
};

export { Layout };
