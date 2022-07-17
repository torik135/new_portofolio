import '../styles/globals.css';

import '../styles/components/sidebar.scss';
import '../styles/components/tooltip.scss';
import '../styles/components/navheader.scss';
import '../styles/components/footer.scss';

import '../styles/pages/home.scss';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
