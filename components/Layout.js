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
        <div className="relative w-32 mx-auto rounded-full overflow-hidden bg-slate-500">
          <img src="/images/img5.jpg" alt="" className="w-32 h-32 rounded-full ring-2 hover:scale-110 object-cover duration-300" />
        </div>
        <h1 className="text-2xl mt-4 font-bold text-center">{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
