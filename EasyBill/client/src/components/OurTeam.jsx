import React from 'react'
import '../styles/team.css'
import elyess from '../assets/elyess.png'
import aniss from '../assets/aniss.png'
import al from '../assets/al.png'
import jasser from '../assets/jasser.png'
import gaith from '../assets/gaith.png'


const OurTeam = () => {
    return (
        <div className='teamcont' id='ourteam'>
            <div className='titleteam'>
            <div class="spinnerr">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                <div className="waviy">
                    <span style={{ '--i': 1 }}>O</span>
                    <span style={{ '--i': 2 }}>u</span>
                    <span style={{ '--i': 3 }}>r</span>
                    <span style={{ '--i': 4 }}>T</span>
                    <span style={{ '--i': 5 }}>e</span>
                    <span style={{ '--i': 6 }}>a</span>
                    <span style={{ '--i': 7 }}>m</span>
                    <span style={{ '--i': 8 }}>.</span>
                </div>
            </div>
            <div className="new-responsive-container-block new-container" >
                <div className="new-responsive-container-block">
                    <div className="new-responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 new-card-container">
                        <div className="new-card">
                            <div className="new-team-image-wrapper">
                                <img className="new-team-member-image" src={al} alt="Team Member" />
                            </div>
                            <p className="new-text-blk new-name">
                                Ala Fehri
                            </p>
                            <p className="new-text-blk new-position">
                                Front-end Developer
                            </p>
                        </div>
                    </div>
                    {/* Repeat similar blocks for other team members */}
                </div>
                <div className="new-responsive-container-block">
                    <div className="new-responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 new-card-container">
                        <div className="new-card">
                            <div className="new-team-image-wrapper">
                                <img className="new-team-member-image" src={aniss} alt="Team Member" />
                            </div>
                            <p className="new-text-blk new-name">
                                Anis Laghmani
                            </p>
                            <p className="new-text-blk new-position">
                                Scrum Master
                            </p>
                        </div>
                    </div>
                    {/* Repeat similar blocks for other team members */}
                </div>
                <div className="new-responsive-container-block">
                    <div className="new-responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 new-card-container">
                        <div className="new-card">
                            <div className="new-team-image-wrapper">
                                <img className="new-team-member-image" src={elyess} alt="Team Member" />
                            </div>
                            <p className="new-text-blk new-name">
                                Ilyes Ben Smida
                            </p>
                            <p className="new-text-blk new-position">
                                Product Owner
                            </p>
                        </div>
                    </div>
                    {/* Repeat similar blocks for other team members */}
                </div>
                <div className="new-responsive-container-block">
                    <div className="new-responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 new-card-container">
                        <div className="new-card">
                            <div className="new-team-image-wrapper">
                                <img className="new-team-member-image" src={jasser} alt="Team Member" />
                            </div>
                            <p className="new-text-blk new-name">
                                Jesser Boulila
                            </p>
                            <p className="new-text-blk new-position">
                                Back-End Developer
                            </p>
                        </div>
                    </div>
                    {/* Repeat similar blocks for other team members */}
                </div>
                <div className="new-responsive-container-block">
                    <div className="new-responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 new-card-container">
                        <div className="new-card">
                            <div className="new-team-image-wrapper">
                                <img className="new-team-member-image" src={gaith} alt="Team Member" />
                            </div>
                            <p className="new-text-blk new-name">
                                Gaith Jeridi                            </p>
                            <p className="new-text-blk new-position">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                    {/* Repeat similar blocks for other team members */}
                </div>
            </div>
        </div>
    );
}
export default OurTeam