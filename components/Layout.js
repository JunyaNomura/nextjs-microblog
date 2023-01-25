import Head from "next/head";

const name = "Junya Nomura"
export const siteTitle = "next.js blog";

function Layout({ children }) {
  return (
    <div className="p-2 max-w-4xl mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500">
          <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
        </svg> */}
        <h1 className="text-2xl font-bold text-center">{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
