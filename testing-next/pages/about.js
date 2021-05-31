import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <p>about works!</p>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  )
}
