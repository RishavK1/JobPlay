import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/job/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  // now moving to admin routes //
  {
    path: "/admin/companies",
    element: <Companies/>,
  },
  {
    path: "/admin/company/new",
    element: <CompanyCreate/>,
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup/>,
  }
]);
function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
