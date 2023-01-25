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
        <Product />
      </Layout>
    </>
  )
}
