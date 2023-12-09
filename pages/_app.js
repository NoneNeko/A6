// ASSIGNMENT5

// Name: Dai Dung Lam
// Student ID: 137 632 196
// Date: 11/06/2023
// Section: NDD 

import Layout from '@/components/layout';
import '@/styles/globals.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import  RouteGuard  from '../components/RouteGuard';

function MyApp({ Component, pageProps }) {
  return <RouteGuard><Layout><Component {...pageProps} /></Layout></RouteGuard>;
}

export default MyApp;