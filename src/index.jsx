import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize, getConfig,
} from '@edx/frontend-platform';
import {
  AppProvider, ErrorPage,
} from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import messages from './i18n';
import './index.scss';
import App from './App';
import IframeMakerModal from './components/IframeMakerModal/IframeMakerModal';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Helmet>
        <title>
          Code | {getConfig().SITE_NAME}
        </title>
        <link rel="shortcut icon" href={getConfig().FAVICON_URL} type="image/x-icon" />
      </Helmet>
      <App />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
});

export { IframeMakerModal };