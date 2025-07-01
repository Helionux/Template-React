import { memo } from 'react'

import Hero from '../components/Hero'
import Footers from '../components/Footers'

const Home = () => (
  <>
    <main>
      <Hero />
      <Footers />
    </main>
  </>
)

export default memo(Home)
