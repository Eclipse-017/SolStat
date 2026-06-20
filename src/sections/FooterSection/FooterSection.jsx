import "./FooterSection.css";
import MainSection from '../../components/MainSection/MainSection'

const FooterSection = () => {
  const students = [
    {
      name: "Abdulsalam",
      github: "https://github.com/Eclipse-017",
    },
    {
      name: "Esther",
      github: "https://github.com/Estimilita",
    },
    {
      name: "Richard",
      github: "https://github.com/Rekahdo",
    },
    {
      name: "Silver",
      github: "https://github.com/silver-orioha",
    },
    {
      name: "Adebayo",
      github: "https://github.com/bayoradebajo",
    },
    {
      name: "Tosin",
      github: "https://github.com/tosinabdul2-sudo",
    },
  ];

  return (
    <>
      <footer className="footer-section" aria-label="Site Footer">
        <MainSection>
          <div>
            <h4 className="heading">About</h4>

            <p className="heading-description">
              The group members who worked on this project are:
            </p>

            <nav className="students-nav" aria-describedby="team-list-desc">
              <ul className="student-links">
                  {
                      students.map(({name, github}, index) => (
                          <li className="student-link" key={index}>
                            <a href={github} target="_blank" rel="noopener noreferrer"
                              aria-label={`${name}'s GitHub Profile (opens in new tab)`}>{name}</a>
                          </li>
                      ))
                  }
              </ul>
            </nav>
          </div>

          <div>
            <hr className="line" role="presentation"/>

            <div>
              <p className="about-info">
                &#169; 2026 Designed by{" "}
                <a href="https://amakandukwu.com/" target="_blank" rel="noopener noreferrer">Amaka </a> &{" "}
                <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">Ifeoma A.</a>
              </p>
            </div>

            <div className="container">
              <div>
                <span>Built by {" "}
                    <a href="https://github.com/Eclipse-017/CoBuild" target="_blank" rel="noopener noreferrer"
                      aria-label="Phoenix Group 26 GitHub Repository (opens in new tab)">
                      Phoenix Group 26.</a></span>
                <span id="copyright"> All rights reserved</span>
              </div>
              <div>
                <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer" className="ts-link"
                  aria-label="TS Academy's Website (opens in new tab)">
                  TSAcademy
                </a>
              </div>
            </div>
          </div>

        </MainSection>
      </footer>
    </>
  );
};

export default FooterSection;