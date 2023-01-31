import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Product from '@/components/Product'
import { getPostsData } from '../lib/post';

//SSGの場合（外部から1度だけデータをとってくる）
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  return {
    props: {
      allPostsData,
    }
  }
}

//SSRの場合
// export async function getServerSideProps(context) {

//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     }
//   }
// }

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <>
      <Layout>
        <section>
          <p className="text-lg mt-4 max-w-2xl mx-auto">テクノロジー系のビジネスマンです。英語、フランス語、中国語を勉強しています。好きなプログラミング言語はGoです。</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">旅人のブログ</h2>
          <div className="grid grid-cols-2 gap-2">
            {allPostsData.map((post) => (
              <article key={post.id} className="">
                <Link href={`posts/${post.id}`}>
                  <img src={post.thumbnail} className="h-96 w-96 object-cover duration-200" />
                </Link>
                <Link href={`posts/${post.id}`}>
                  {post.title}
                </Link>
                <br />
                <small>{post.date}</small>
              </article>
            ))}
          </div>

        </section>

      </Layout>
    </>
  )
}
