import './TableSection.css'

import HeadingTwo from '../../components/HeadingTwo/HeadingTwo';
import MainSection from '../../components/MainSection/MainSection';

function TableSection() {
    return (
        <MainSection className="table-section">
            <HeadingTwo className="table-heading"
                title="Planetary Facts at a Glance"
                description="Below is a comparative table of major planets in our solar system. The data highlights key physical properties
                    used by astronomers and researchers worldwide."/>

            <table cellspacing="0">
                <caption className="caption">Data about the planets in our Solar System (Planetary Facts taken from NASA)</caption>
                <thead>
                    <tr className="head-row">
                        <th scope="col" colspan="2" ></th>
                        <th>Name</th>
                        <th>Mass (10 24kg)</th>
                        <th>Diameter (km)</th>
                        <th>Density (kg/m3)</th>
                        <th>Gravity (m/s2)</th>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td colspan="2" rowspan="4" className="topic">Terrestial Planets</td>
                        <td className="content">Mercury</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <td className="content">Venus</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <td className="content">Earth</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <td className="content">Mars</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <td rowspan="4" className="topic">Jovian Planets</td>
                        <td rowspan="2" className="topic">Gas Giants</td>
                        <td className="content">Jupiter</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <td className="content">Saturn</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <td rowspan="2" className="topic">Ice Giants</td>
                        <td className="content">Uranus</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <td className="content">Neputne</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                    <tr>
                        <td colspan="2" className="topic">Dwarf Planets</td>
                        <td className="content">Pluto</td>
                        <td className="content">0.330</td>
                        <td className="content">4,878</td>
                        <td className="content">5427</td>
                        <td className="content">3.7</td>
                    </tr>
                </tbody>
            </table>
        </MainSection>
    )
}

export default TableSection;