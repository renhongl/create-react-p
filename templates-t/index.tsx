import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

const Signin = React.lazy(() => import("./pages/Signin"));
const Example = React.lazy(() => import("./pages/Example"));
const Test = React.lazy(() => import("./pages/Test"));
const Home = React.lazy(() => import("./pages/Home"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

const App = React.lazy(() => import("./layouts/app/App"));
const Auth = React.lazy(() => import("./layouts/auth/Auth"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<React.Suspense><Auth /></React.Suspense>}>
            <Route index element={<React.Suspense><Signin /></React.Suspense>}></Route>
          </Route>
          <Route path="app" element={<React.Suspense><App /></React.Suspense>}>
            <Route index element={<React.Suspense><Home /></React.Suspense>}></Route>
            <Route path="test" element={<React.Suspense><Test /></React.Suspense>}></Route>
            <Route path="example" element={<React.Suspense><Example /></React.Suspense>}></Route>
          </Route>
          <Route path="*" element={<React.Suspense><NoMatch /></React.Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
