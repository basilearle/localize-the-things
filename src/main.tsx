import '@picocss/pico';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {IntlProvider} from "react-intl";

import App from './app/App'

import translations from './i18n/en.json';

const rootElement = document.getElementById('root')!;

ReactDOM
  .createRoot(rootElement)
  .render(
    <React.StrictMode>
      <IntlProvider
        messages={translations}
        locale={navigator.language}>
        <App />
      </IntlProvider>
    </React.StrictMode>,
  );
