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
import FooterSection from './sections/FooterSection/FooterSection'

import solStatVideo from './assets/video.mp4';

function App() {
  return (
    <>
      <HeroSection />

      <main>
        <VideoSection src={solStatVideo}/>
        <ImageSection />
        <TableSection />
        <FormSection />
      </main>

       <FooterSection />
    </>
  )
}

export default App
