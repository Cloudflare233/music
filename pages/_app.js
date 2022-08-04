import "../styles/globals.css";

import "inter-ui/inter.css";
import "@fontsource/ibm-plex-sans";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
