import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PdfGen } from './Pdf/PdfGen'
import { TextGen } from './Text/TextGen'
import { ExcelGen } from './Excel/ExcelGen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PdfGen />
  },
  {
    path: '/Excel',
    element: <ExcelGen />
  },
  {
    path: '/Text',
    element: <TextGen />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
