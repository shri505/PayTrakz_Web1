import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Transaction from "./routes/Transaction";
import Approval from "./routes/Approval";
import Setting from "./routes/Setting";
import Profile from "./routes/Profile";
import Subscription from "./routes/Subscription";
import Invitations from "./routes/Invitations";
import Parties from "./routes/Parties";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Projects from "./routes/Projects";
import Statistic from "./routes/Statistic";
// import TermsAndConditions from "./routes/TermsAndConditions";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "transaction", element: <Transaction /> },
      {
        path: "approval",
        element: <Approval />,
        children: [
          { path: "invitations", element: <Invitations /> }, // Relative path
          { path: "projects", element: <Projects /> },      // Relative path
        ],
      },
      
      { path: "statistic", element: <Statistic /> },
      {
        path: "setting",
        element: <Setting />,
        children: [
          { path: "profile", element: <Profile /> },
          { path: "subscription", element: <Subscription /> },
          { path: "invitations", element: <Invitations /> },
          { path: "parties", element: <Parties /> },
          { path: "privacy-policy", element: <PrivacyPolicy /> },
          // { path: "terms-and-conditions", element: <TermsAndConditions /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
