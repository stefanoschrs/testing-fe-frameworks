import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <p>home works!</p>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  )
}
