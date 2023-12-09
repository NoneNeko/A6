// ASSIGNMENT6
// WEBSITE: https://a6-livid.vercel.app/
// Name: Dai Dung Lam
// Student ID: 137 632 196
// Date: 12/09/2023
// Section: NDD 

import jwt from "jsonwebtoken";

function setToken(token){
  localStorage.setItem('access_token', token);
}

export function getToken(){
    return localStorage.getItem('access_token');
}

export function readToken(){
    const token = getToken();
    console.log(token);
    try {
        if (token) {
          const decodedToken = jwt.decode(token)
          console.log(decodedToken)
          return decodedToken;
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
}

export function isAuthenticated(){
  const token = readToken();  
  return (token) ? true : false;
}

export function removeToken(){
  localStorage.removeItem('access_token');
}

const testCredentials = [
    { userName: 'ddlam1', password: 'SenecaCollege2023' }
  ];
  
 export async function authenticateUser(userName, password) {
    const user = testCredentials.find(u => u.userName === userName && u.password === password);
  
    if (user) {
      const token = generateToken(user);
      setToken(token);
      return { token };
    } else {
      throw new Error('Invalid username or password');
    }
  }
  
  function generateToken(user) {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  }