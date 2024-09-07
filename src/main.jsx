import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DishoApp } from './DishoApp'
import '../scss/custom-bootstrap.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import 'leaflet/dist/leaflet.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <DishoApp/>
    </Provider>
  </StrictMode>,
)
