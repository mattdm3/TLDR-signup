import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{ backgroundImage: "linear-gradient(90deg,#1b0022 0,#000);" }}
        className="text-white"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
