import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/ErrorPage';
import Home from './components/Home/index.jsx';
import Stories from './components/Stories/index.jsx';
import Contact from './components/Contact';
import Assistant from './components/Assistant/index.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'stories',
        element: <Stories />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'assistant',
        element: <Assistant />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
