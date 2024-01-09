import "@public/css/MuiStyling.css";
import "@public/css/globals.css";
import "@public/css/preflight.css";

import { Rubik } from "next/font/google";

import { Provider } from "./provider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Ondangan.id",
    template: "%s | Ondangan.id",
  },
  description: "Buat undangan digital dengan mudah dan cepat",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={`${rubik.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
