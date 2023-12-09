// ASSIGNMENT6
// WEBSITE: https://a6-livid.vercel.app/
// Name: Dai Dung Lam
// Student ID: 137 632 196
// Date: 12/09/2023
// Section: NDD 

import Link from "next/link";
import { useRouter } from 'next/router';
import { isAuthenticated, removeToken } from "../lib/authenticate";

export default function Layout(props) {
  const isLoggedIn = isAuthenticated();
  const router = useRouter();

  const handleLogout = () => {
    removeToken(); 
    router.push("/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "red" }}>Seneca Store</h1>
        <img
          src="/senecaIcon.png"
          alt="seneca"
          style={{
            maxWidth: "10%",
            maxHeight: "2%",
            marginRight: "1%",
            marginTop: "1%",
          }}
        />
      </div>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
      <Link href="/productDetails">Product Details</Link> |{" "}
      <Link href="/shoppingCart">ShoppingCart</Link> |{" "}
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
          <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}
