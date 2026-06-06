import './App.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/queries.css'

import VideoSection from './components/VideoSection/VideoSection'
import HeroSection from './components/HeroSection/HeroSection'
import ImageSection from './components/ImageSection/ImageSection'
import TableSection from './components/TableSection/TableSection'
import FormSection from './components/FormSection/FormSection'

function App() {
  return (
    <>
      <VideoSection src='/public/video/video.mp4'/>
      <HeroSection />
      <ImageSection />
      <TableSection />
      <FormSection />
    </>
  )
}

export default App
