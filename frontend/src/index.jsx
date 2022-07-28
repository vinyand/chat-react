import React from 'react';
import ReactDOM from 'react-dom';
import { FronteggProvider } from '@frontegg/react';

import App from './App';

const contextOptions = {
  baseUrl: 'https://app-uh0nf2q56sig.frontegg.com',
  clientId: 'e9777db5-09a5-441a-b254-977732ab4a4a',
};

ReactDOM.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox>
    <App />
  </FronteggProvider>,
  document.getElementById('root'),
);
