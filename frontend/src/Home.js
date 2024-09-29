import { useEffect } from 'react';
import { NavLink, redirect, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Card from './Card';

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
        <section className="section-two fade2">
            <div className="container">
                <img className="img-1" src="https://placehold.co/400"></img>
                <p className="description">Introducing Galactic Gateway, a pioneering company revolutionizing space travel with our state-of-the-art portal system. We provide a unique solution that allows users to traverse the cosmos effortlessly by spawning portals directly at their location. Our advanced technology enables individuals to step through these portals and instantly arrive at their desired planetary destination, transforming the way we explore the universe. With a commitment to safety and innovation, Galactic Gateway opens up a realm of possibilities, making interplanetary travel accessible and exciting for everyone. Experience the future of travel with us, where the universe is just a step away.</p>
            </div>
        </section>
        <section className="section-three fade2">
            <div className="container">
                <img className="img-2" src="https://placehold.co/400"></img>
                <p className="description2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
        <section>
            <h2>Customer Reviews</h2>
            <div className="reviews">
                <Card name="edmon" review="amazing"></Card>
                <Card name="andy" review="wonderful"></Card>
                <Card name="kenneth" review="fantastic"></Card>
                <Card name="michael" review="incredible"></Card>
              </div>
        </section>
        </>
        )
}

export default Home