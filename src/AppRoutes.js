import React, { Suspense } from 'react';
import Loading from './based/Loading';

const HomePage = React.lazy(() => import('./homepage/homepage'));
const ServicePage = React.lazy(() => import('./ServicePage/ServicePage'));
const ServiceDetail = React.lazy(() => import('./ServicePage/ServiceDetail'));
const StylistPage = React.lazy(() => import('./StylistPage/StylistPage'));
const StylistProfile = React.lazy(() => import('./StylistPage/StylistProfile'));

const AppRoutes = [
   {
      path: '/',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <HomePage />
         </Suspense>
      ),
   },
   {
      path: '/service',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <ServicePage />
         </Suspense>
      ),
   },
   {
      path: '/service/:id',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <ServiceDetail />
         </Suspense>
      ),
   },
   {
      path: '/stylist',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <StylistPage />
         </Suspense>
      ),
   },
   {
      path: '/stylist/:id',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <StylistProfile />
         </Suspense>
      ),
   },
];

export default AppRoutes;
