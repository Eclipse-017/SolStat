import './App.css'
import VideoSection from './components/VideoSection/VideoSection'
import HeroSection from './components/HeroSection/HeroSection'

function App(){
  return( 
    <>
      <HeroSection></HeroSection>
      <VideoSection src='/public/video/video.mp4'/>
    </>
  )
}

export default App
