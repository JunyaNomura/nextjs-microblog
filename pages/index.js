import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Product from '@/components/Product'

export default function Home() {
  return (
    <>
      <Layout>
        <section>
          <p class="text-lg mt-4 max-w-2xl mx-auto">テクノロジー系のビジネスマンです。英語、フランス語、中国語を勉強しています。好きなプログラミング言語はGoです。</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">旅人のブログ</h2>
          <div>
            <article class="">
              <Link href="#">
                <img src="/images/img3.jpg" class="h-96 w-96 object-cover hover:translate-x-2 hover:translate-y-2 duration-200 border-r-12 border-b-8 border-r-indigo-500 border-b-indigo-500 hover:border-none" />
              </Link>
              <Link href="#">
                  自由が丘散策
              </Link>
              <br />
              <small>February 23, 2022</small>
            </article>
          </div>

        </section>

      </Layout>
    </>
  )
}
