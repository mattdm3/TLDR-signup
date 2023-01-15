import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{ backgroundImage: "radial-gradient(#1b0029, #000)" }}
        className="text-white"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
