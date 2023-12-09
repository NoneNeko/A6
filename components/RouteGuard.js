// ASSIGNMENT5

// Name: Dai Dung Lam
// Student ID: 137 632 196
// Date: 11/06/2023
// Section: NDD 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/lib/authenticate';

const PUBLIC_PATHS = ['/login', '/', '/_error'];

export default function RouteGuard(props) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        
        authCheck(router.pathname);

        
        router.events.on('routeChangeComplete', authCheck)

        
        return () => {
            router.events.off('routeChangeComplete', authCheck);
        }

    }, []);

    function authCheck(url) {
        const path = url.split('?')[0];
        if (!isAuthenticated() && !PUBLIC_PATHS.includes(path)) {
            setAuthorized(false);
            router.push("/login");
        } else {
            setAuthorized(true);
        }
    }

    return (
      <>
        {authorized && props.children}
      </>
    )
}