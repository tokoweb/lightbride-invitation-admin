import { jwtDecode } from "jwt-decode";

const isValidToken = (token) => {
  if (!token) return null;
  const decoded = jwtDecode(token);

  return new Date() > new Date(decoded.exp) * 1000 ? null : token;
};

export default isValidToken;
