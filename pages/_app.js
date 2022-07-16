import '../styles/globals.css';

import '../styles/components/sidebar.scss';
import '../styles/components/tooltip.scss';
import '../styles/components/navheader.scss';
import '../styles/components/footer.scss';
import '../styles/components/toast.scss';

import '../styles/pages/home.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
