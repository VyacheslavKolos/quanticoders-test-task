import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

import Backdrop from '../ui/Backdrop';
import Spinner from '../ui/Spinner';

import Routes from './routes.enum';

import ScrollToTop from '../ui/tools/ScrollToTop.tsx';

const Help = lazy(() => import('../modules/help'));

function getPublicRoutes() {
  return [{ path: Routes.Help, element: <Help /> }];
}

const useRouter = () =>
  createBrowserRouter([
    {
      path: Routes.App,
      element: (
        <Suspense
          fallback={
            <Backdrop>
              <Spinner />
            </Backdrop>
          }
        >
          <ScrollToTop>
            <Outlet />
          </ScrollToTop>
        </Suspense>
      ),

      children: [
        ...getPublicRoutes(),

        {
          path: '*',
          index: true,
          element: <Navigate to={Routes.Help} />,
        },
      ],
    },

    {
      index: true,
      element: <Navigate to={Routes.Help} />,
    },
  ]);

export default useRouter;
