import HeadingTwo from '../../components/HeadingTwo/HeadingTwo';
import MainSection from '../../components/MainSection/MainSection';

import './VideoSection.css'

function VideoSection({
    src="https://cdn.pixabay.com/video/2023/10/09/184209-872701502_large.mp4", 
    type="video/mp4", desc="The Planets In Our Solar System"}){

    return (
        <MainSection className='video-section' aria-label="Educational Media Section">
            <div className='left'>
                <figure>
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        controls 
                        className='media-border-radius'
                        aria-label="CGI visualization of the major planets orbiting the sun inside our solar system"
                    >
                        <source src={src} type={type} />   

                        {/* Video not supported by browser */}
                        Your browser does not support the video tag.
                    </video>

                    <figcaption aria-hidden="true">{desc}</figcaption>
                </figure>
            </div>

            <div className='right'>
                <HeadingTwo 
                    className="video-heading"
                    title="How Planetary Data Helps Us Understand Space"
                    description={<>
                        Planetary science goes beyond images. Comparing
                        <strong> mass</strong>, <strong> diameter</strong>,
                        <strong> gravity</strong>, and <strong>density</strong>, 
                        we gain insight into how planets form, behave, 
                        and interact within the solar system.
                    </>}
                />
            </div>
        </MainSection>
    )

}

export default VideoSection;