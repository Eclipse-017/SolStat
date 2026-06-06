import './App.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/queries.css'

import HeroSection from './sections/HeroSection/HeroSection'
import VideoSection from './sections/VideoSection/VideoSection'
import ImageSection from './sections/ImageSection/ImageSection'
import TableSection from './sections/TableSection/TableSection'
import FormSection from './sections/FormSection/FormSection'

function App() {
  return (
    <>
      <HeroSection />
      <VideoSection src='/public/video/video.mp4'/>
      <ImageSection />
      <TableSection />
      <FormSection />
    </>
  )
}

export default App
