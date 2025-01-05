import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Outlet,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Products from "./routes/Transaction";
// import Home from "./routes/Home";
// import Reports from "./routes/Approval";
// import Navbar from "./components/Navbar";
// import "./App.css";

// const AppLayout = () => (
//   <>
//     <Navbar />
//     <Outlet />
//   </>
// );

// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route element={<AppLayout />}>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/products" element={<Products />} />
// //       <Route path="/reports" element={<Reports />} />
// //     </Route>
// //   )
// // );

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "products",
//         element: <Products />,
//       },
//       {
//         path: "reports",
//         element: <Reports />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
