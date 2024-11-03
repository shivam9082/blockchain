import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import LandRegistry from './components/LandRegistry';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ProfileSettings from './components/ProfileSettings';
import HelpSupport from './components/HelpSupport';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Settings from './components/Settings';
import MainComponent from './components/MainComponent';

// New Layout Component that handles the routes
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />  {/* This is where child routes will be rendered */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Use the AppLayout for routing
    children: [
      {
        path: "/",
        element: <MainComponent />
      },
      {
        path: "/landregistry",
        element: <LandRegistry />
      },
      {
        path: "/profilesettings",
        element: <ProfileSettings />
      },
      {
        path: "/helpandsupport",
        element: <HelpSupport />
      },
      {
        path: "/aboutus",
        element: <AboutUs/>
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/settings",
        element: <Settings/>
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} /> {/* Only render RouterProvider here */}
      </div>
    </Provider>
  );
}

export default App;
