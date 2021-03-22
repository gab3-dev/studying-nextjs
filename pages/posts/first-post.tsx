import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Sung</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/img/Wallpaper.png" // Route of the image file
        height={1218} // Desired size with correct aspect ratio
        width={563} // Desired size with correct aspect ratio
        alt="Made By @GabeDGD"
      />
    </>
  )
}