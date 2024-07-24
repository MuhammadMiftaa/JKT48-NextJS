import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-white scrollbar-track-black hover:scrollbar-track-blue-700 active:scrollbar-track-black"
    >
      <Head />
      <body className="scroll-smooth">
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
      </body>
    </Html>
  );
}
