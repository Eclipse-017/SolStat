import './App.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/queries.css'

import HeroSection from './components/HeroSection/HeroSection'
import VideoSection from './components/VideoSection/VideoSection'
import ImageSection from './components/ImageSection/ImageSection'
import TableSection from './components/TableSection/TableSection'

function App() {
  return (
    <>
      <HeroSection />
      <VideoSection src='/video/video.mp4' />
      <ImageSection />
      <TableSection />
    </>
  )
}

export default App
