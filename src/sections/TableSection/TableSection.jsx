import './TableSection.css'
import HeadingTwo from '../../components/HeadingTwo/HeadingTwo';
import MainSection from '../../components/MainSection/MainSection';

function TableSection() {
    return (
        <MainSection className="table-section">
            <HeadingTwo 
                className="table-heading"
                title="Planetary Facts at a Glance"
                description="Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide."
            />

            <table>
                <caption className="caption">Data about the planets in our Solar System (Official Planetary Facts taken from NASA)</caption>
                <thead>
                    <tr className="head-row">
                        <th scope="col" colSpan="2" id="category-header"></th>
                        <th scope="col" id="name-header">Name</th>
                        <th scope="col">Mass (10<sup>24</sup> kg)</th>
                        <th scope="col">Diameter (km)</th>
                        <th scope="col">Density (kg/m<sup>3</sup>)</th>
                        <th scope="col">Gravity (m/s<sup>2</sup>)</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Terrestrial Planets */}
                    <tr>
                        <th scope="rowgroup" colSpan="2" rowSpan="4" className="topic" id="terrestrial">Terrestrial Planets</th>
                        <th scope="row" className="content" id="mercury" aria-describedby="terrestrial name-header">Mercury</th>
                        <td className="content">0.330</td>
                        <td className="content">4,879</td>
                        <td className="content">5,429</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <th scope="row" className="content" id="venus" aria-describedby="terrestrial name-header">Venus</th>
                        <td className="content">4.87</td>
                        <td className="content">12,104</td>
                        <td className="content">5,243</td>
                        <td className="content">8.9</td>
                    </tr>
                    <tr>
                        <th scope="row" className="content" id="earth" aria-describedby="terrestrial name-header">Earth</th>
                        <td className="content">5.97</td>
                        <td className="content">12,756</td>
                        <td className="content">5,514</td>
                        <td className="content">9.8</td>
                    </tr>
                    <tr>
                        <th scope="row" className="content" id="mars" aria-describedby="terrestrial name-header">Mars</th>
                        <td className="content">0.642</td>
                        <td className="content">6,792</td>
                        <td className="content">3,934</td>
                        <td className="content">3.7</td>
                    </tr>

                    {/* Jovian Planets - Gas Giants */}
                    <tr>
                        <th scope="rowgroup" rowSpan="4" className="topic" id="jovian">Jovian Planets</th>
                        <th scope="rowgroup" rowSpan="2" className="topic" id="gas-giants" aria-describedby="jovian">Gas Giants</th>
                        <th scope="row" className="content" id="jupiter" aria-describedby="jovian gas-giants name-header">Jupiter</th>
                        <td className="content">1,898</td>
                        <td className="content">142,984</td>
                        <td className="content">1,326</td>
                        <td className="content">23.1</td>
                    </tr>
                    <tr>
                        <th scope="row" className="content" id="saturn" aria-describedby="jovian gas-giants name-header">Saturn</th>
                        <td className="content">568</td>
                        <td className="content">120,536</td>
                        <td className="content">687</td>
                        <td className="content">9.0</td>
                    </tr>

                    {/* Jovian Planets - Ice Giants */}
                    <tr>
                        <th scope="rowgroup" rowSpan="2" className="topic" id="ice-giants" aria-describedby="jovian">Ice Giants</th>
                        <th scope="row" className="content" id="uranus" aria-describedby="jovian ice-giants name-header">Uranus</th>
                        <td className="content">86.8</td>
                        <td className="content">51,118</td>
                        <td className="content">1,271</td>
                        <td className="content">8.7</td>
                    </tr>
                    <tr>
                        <th scope="row" className="content" id="neptune" aria-describedby="jovian ice-giants name-header">Neptune</th>
                        <td className="content">102</td>
                        <td className="content">49,528</td>
                        <td className="content">1,638</td>
                        <td className="content">11.0</td>
                    </tr>

                    {/* Dwarf Planets */}
                    <tr>
                        <th scope="rowgroup" colSpan="2" className="topic" id="dwarf">Dwarf Planets</th>
                        <th scope="row" className="content" id="pluto" aria-describedby="dwarf name-header">Pluto</th>
                        <td className="content">0.0130</td>
                        <td className="content">2,376</td>
                        <td className="content">1,850</td>
                        <td className="content">0.7</td>
                    </tr>
                </tbody>
            </table>
        </MainSection>
    )
}

export default TableSection;