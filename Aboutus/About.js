import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
    const navigate = useNavigate();

    return (
        <div>
            <header1>
                <nav>
                    <div className="logo">
                        <h1>
                            MJ<b>EATS</b>
                        </h1>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="#" onClick={() => navigate('/')}>Home</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => navigate('/about')}>About</a>
                        </li>
                        <li>
                           
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </nav>
            </header1>

            <section className="about">
                <h1>About Us</h1>
                <p style={{ fontWeight: "bold" }}>MJEATS is a leading platform...</p>
                <div className="about-info">
                    <div className="about-img">
                        
                    </div>
                    <div>
                        <p>
                            MJEATS is a leading platform that provides the students to select the items from the canteen, place the order, pay directly through the app and also keep a track of your order from ordering to preparation. MJEATS connects you to the canteen by providing convenient way to order food by just a tap instead of having to go through the hassle of standing in the line for long hours. We make you to eat well, waste less time and study well. We are a coordinating juncture between students and canteen.
                            <br />
                            This initiative by us not only provides a platform to order conveniently but also works as your one-stop solution for increasing customer engagement. It provides additional value to our customers which will help us rank above the competition. Research shows that customers are more likely to make a purchase if we provide them with favourable cashless experience. Canteen will have the options to accept payment from a variety of gateways and customer can choose the most convenient option.
                            <br />
                            This project is easily customizable, adaptable, flexible and customer friendly. This project is easily adaptable by students throughout colleges. Due to its versatility, it can attract large number of students amounting to heavy capital.
                        </p>
                        <button>Read More...</button>
                    </div>
                </div>
            </section>

            <section className="team">
                <h1>Meet Our Team</h1>
                <div className="team-cards">
                    <div className="card">
                        <div className="card-img">
                            <img src="anas.jpeg" alt="Anas" />
                        </div>
                        <div className="card-info">
                            <h2 className="card-name">Anas</h2>
                            <p className="card-role">Team Member</p>
                            <p className="card-email">anas@example.com</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="raffay.jpeg" alt="Raffay" />
                        </div>
                        <div className="card-info">
                            <h2 className="card-name">Raffay</h2>
                            <p className="card-role">Team Member</p>
                            <p className="card-email">raffay@example.com</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="furqan.jpeg.webp" alt="Furqan" />
                        </div>
                        <div className="card-info">
                            <h2 className="card-name">Furqan</h2>
                            <p className="card-role">Team Member</p>
                            <p className="card-email">furqan@example.com</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="ismail1.jpeg" alt="Ismail" />
                        </div>
                        <div className="card-info">
                            <h2 className="card-name">Ismail</h2>
                            <p className="card-role">Team Member</p>
                            <p className="card-email">ismail@example.com</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="anas2.jpeg" alt="Anas" />
                        </div>
                        <div className="card-info">
                            <h2 className="card-name">Anas</h2>
                            <p className="card-role">Team Member</p>
                            <p className="card-email">anas@example.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>© 2023 MJEATS. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default About;
