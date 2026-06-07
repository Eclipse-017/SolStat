import './App.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/utilities.css'
import './styles/queries.css'

import HeroSection from './sections/HeroSection/HeroSection'
import ImageSection from './sections/ImageSection/ImageSection'
import TableSection from './sections/TableSection/TableSection'
import FormSection from './sections/FormSection/FormSection'
import VideoSection from './sections/VideoSection/VideoSection'

function App() {
  return (
    <>
      <HeroSection />
      <main>
        <ImageSection />
        <VideoSection src='/public/video/video.mp4'/>
        <TableSection />
        <FormSection />
      </main>

      {/* FOOTER */}
    </>
  )
}

export default App
