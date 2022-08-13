import Head from 'next/head'
import Link from 'next/link'
import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'

export const Post = () => {
  const [text, setText] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  useEffect(() => {
    if (text.length >= 20) {
      alert('text length for up to 20!')
    }
  }, [])

  return (
    <div>
      <Head>
        <title>post page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is post page</h1>
        <input type="text" onChange={handleChange} />
        <p>{text}</p>
      </main>
      <Link href="/">back to top</Link>
    </div>
  )
}
