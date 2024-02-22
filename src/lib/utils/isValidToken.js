import { jwtDecode } from "jwt-decode";

const isValidToken = (token = "") => {
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);

    return new Date() > new Date(decoded.exp) * 1000 ? null : token;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default isValidToken;
