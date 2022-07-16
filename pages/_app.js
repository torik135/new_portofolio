import '../styles/globals.css';

import '../styles/components/sidebar.scss';
import '../styles/components/tooltip.scss';
import '../styles/components/navheader.scss';

import '../styles/pages/home.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
