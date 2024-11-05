  // import react comopnents and hooks
import React from 'react'

  // import react dom
import { createRoot } from 'react-dom/client'

  // import report web vitals
import reportWebVitals from './reportWebVitals'

  // import store
import store from './Store/store.js'

  // import provider from react redux
import { Provider } from 'react-redux'

  // import components
import App from "./App.jsx"

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)


reportWebVitals()

