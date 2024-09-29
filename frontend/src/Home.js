import { useEffect } from 'react';
import { NavLink, redirect, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Home() {
    const navigate = useHistory();
    
    return(
        <>
        <section className="section-one">
            <div className="container">
                <div className="row">
                    <div className="">
                        <h1 className="teleportal text-center pt-5 fade" style={{ fontSize: '10rem' }}>Teleportal</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-two">
            <div className="container">
                <img className="img-1" src="https://placehold.co/400"></img>
                <p>Introducing Galactic Gateway, a pioneering company revolutionizing space travel with our state-of-the-art portal system. We provide a unique solution that allows users to traverse the cosmos effortlessly by spawning portals directly at their location. Our advanced technology enables individuals to step through these portals and instantly arrive at their desired planetary destination, transforming the way we explore the universe. With a commitment to safety and innovation, Galactic Gateway opens up a realm of possibilities, making interplanetary travel accessible and exciting for everyone. Experience the future of travel with us, where the universe is just a step away.</p>
            </div>
        </section>
        <section className="section-three">
            <div className="container">
                <img className="img-2" src="https://placehold.co/400"></img>
				<p>

Discover the future of space travel with Galactic Gateway, the pioneering company transforming how we explore the cosmos! Our revolutionary portal system allows you to effortlessly spawn portals right at your location, enabling you to step through and instantly arrive at your desired planetary destination. With cutting-edge technology and a steadfast commitment to safety, we make interplanetary travel not just a dream but an exciting reality for everyone. Join us on this incredible journey, and experience a universe of possibilities where adventure is just a step away!
				</p>
            </div>
        </section>
        </>
        )
}

export default Home