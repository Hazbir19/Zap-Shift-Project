import React from 'react'
import { createBrowserRouter } from 'react-router';
import Rootlayouts from '../layouts/Rootlayouts';
import HomePage from '../pages/home/home/HomePage';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayouts,
    children:[
      {
        index: true,
        Component: HomePage
      }
    ]

  },
]);

export default router
