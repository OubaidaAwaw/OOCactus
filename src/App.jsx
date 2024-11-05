  // import css files
import './Assets/Css/App.css';

  // import react router components and hooks
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider, ScrollRestoration} from "react-router-dom";

  // import react hooks and components
import { lazy , Suspense} from 'react';
  // import error boundary component
import { ErrorBoundary } from 'react-error-boundary';

// import compnents dynamicallay and normally
const Error404 = lazy(() => import('./Pages/Error404/Error404'))
const HomeLayout = lazy(() => import('./Layouts/HomeLayout/HomeLayout'))
const AboutComp = lazy(() => import('./Pages/AboutComp/AboutComp'))
const MyCart = lazy(() => import('./Pages/Cart/MyCart'))
const Home = lazy(() => import('./Pages/Home/Home'))
const CactusProducts = lazy(() => import('./Pages/Products/CactusProducts'))
const SingleProduct = lazy(() => import('./Pages/SingleProduct/SingleProduct'))

  // router rotues
const router = createBrowserRouter(
  createRoutesFromElements(
      /* app root layout */
    <Route path="/" element={<>
      <ScrollRestoration />
      <ErrorBoundary fallback={<Error404/>}>
        <Suspense>
          <HomeLayout />
        </Suspense>
      </ErrorBoundary>
    </>
    }>
        {/* home page */}
      <Route errorElement={<Suspense><Error404/></Suspense>} index element={
        <ErrorBoundary fallback={<Error404/>}>
          <Suspense><Home/></Suspense>
        </ErrorBoundary>
      }/>

      <Route errorElement={<Suspense><Error404/></Suspense>} path='about-company' element={
        <ErrorBoundary fallback={<Error404/>}>
          <Suspense><AboutComp/></Suspense>
        </ErrorBoundary>
      }/>

      <Route errorElement={<Suspense><Error404/></Suspense>} path='products' element={
        <ErrorBoundary fallback={<Error404/>}>
          <Suspense><CactusProducts/></Suspense>
        </ErrorBoundary>
      }/>

      <Route errorElement={<Suspense><Error404/></Suspense>} path='products/my-cart' element={
      <ErrorBoundary fallback={<Error404/>}>
        <Suspense><MyCart/></Suspense>
      </ErrorBoundary>
      }/>

      <Route errorElement={<Suspense><Error404/></Suspense>} path='products/echinocactus-grusonii' element={
        <ErrorBoundary fallback={<Error404/>}>
          <Suspense><SingleProduct/></Suspense>
        </ErrorBoundary>
      }/>

      <Route path='*' element={
        <ErrorBoundary fallback={<Error404/>}>
          <Suspense><Error404/></Suspense>
        </ErrorBoundary>
      }/>
    </Route>
  )
);

export default function App() {
  return (<>
      {/* app routed page */}
    <RouterProvider router={router} />
  </>);
}


