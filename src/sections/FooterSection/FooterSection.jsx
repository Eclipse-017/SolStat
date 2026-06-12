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
      <footer className="footer-section">
        <MainSection>
          <div>
            <h4 className="heading">About</h4>

            <p className="heading-description">
              The group members who worked on this project are:
            </p>

            <nav className="students-nav">
              <ul className="student-links">
                  {
                      students.map(({name, github}, index) => (
                          <li className="student-link" key={index}><a href={github} target="_blank">{name}</a></li>
                      ))
                  }
              </ul>
            </nav>
          </div>

          <div>
            <hr className="line" />

            <div>
              <p className="about-info">
                &#169; 2026 Designed by{" "}
                <a href="https://amakandukwu.com/">Amaka </a> &{" "}
                <a href="https://www.linkedin.com/in/ifeomaokocha">Ifeoma A.</a>
              </p>
            </div>

            <div className="container">
              <div>
                <span>Built by Phoenix Group 26. </span>
                <span id="copyright">All rights reserved</span>
              </div>
              <div>
                <a href="https://tsacademyonline.com/" target="_blank" className="ts-link">
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