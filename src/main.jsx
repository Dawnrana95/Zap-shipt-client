import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from './Home/Home.jsx';
import Root from './Home/Root.jsx';
import AddParcel from './Pagess/AddParcel.jsx';
import DashboardLayout from './Layout/DashboardLayout.jsx';
import MyParcels from './Layout/MyParcels.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/addparcel',
        Component: AddParcel,
      },

    ]
  },

  {
    path: 'dashboard',
    Component: DashboardLayout,
    children: [
      {
        path: 'myparcel',
        Component: MyParcels,
      }
    ]

  }
]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-7xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />,
      </QueryClientProvider>
    </div>
  </StrictMode>,
)
