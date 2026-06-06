import './App.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/queries.css'

import VideoSection from './components/VideoSection/VideoSection'
import HeroSection from './components/HeroSection/HeroSection'
import ImageSection from './components/imageSection/ImageSection'
import TableSection from './components/TableSection/TableSection'

function App() {
  return (
    <>
      <VideoSection src='/public/video/video.mp4' />
      <ImageSection />
      <TableSection />
      <HeroSection></HeroSection>
    </>
  )
}

export default App
