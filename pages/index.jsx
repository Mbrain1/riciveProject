import Head from 'next/head'
import CoverArea from '../src/components/CoverArea/CoverArea'
import MoreInfo from 'src/components/MoreInfo/MoreInfo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricive</title>
      </Head>

      <main className="">
        <section style={{ marginBottom: '50%'}}>
         <CoverArea />
         <MoreInfo />
        </section>
        {/* <section style={{ backgroundColor: 'white'}}>

        </section> */}
      </main>
    </div>
  )
}
