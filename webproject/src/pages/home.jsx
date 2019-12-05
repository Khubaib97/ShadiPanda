import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'drywest/layout/styles/layout.css';
import icon from 'img/fidelcatto.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <div className="wrapper row0">
        <nav id="mainav" className="hoc clear"> 
          <ul className="clear">
            <li className="active"><Link to={'/'}>Home</Link></li>
            <li><Link to={'/catalogue'}>Catalogue</Link></li>
            <li><Link to={'/search'}>Search</Link></li>
          </ul>
        </nav>
      </div>
      <div className="wrapper row3">
        <main className="hoc container clear"> 
          <h1>About</h1>
          <p>ShaadiPanda is a small business designed to meet the needs
of the ever-changing social world. Karachi, Pakistan is the current home with plans to expand to
branch offices within four years. 
We have multiple venues/vendors that are providing us with various packages which includes all
types of setups like the stages, flooring, lighting, florals, ShaadiPanda is invested in the community it
resides in.
ShaadiPanda is, in part, the answer to demands of the social world, on the working family, heavily-
burdened office, out-of-town business, or special occasion in need of special recognition. As a
business, we understand the needs of public and private organizations. As members of large
families, we understand the needs of setting special time apart from other events in our lives.
ShaadiPanda strives to accomplish these goals in Karachi and eventually other areas of the Pakistan.
ShaadiPanda is an equal opportunity business making its expertise and its services available to help its
customers plan their own events, book venues and provide a complete forum for everything
related to Events of all types. Providing the end user multiple alternatives and choices which they
can compare and choose the one which suits them the best. ShaadiPanda will bring interactive event
planning as close as on their personal computers or even mobiles. Through these and other
services and administrations, ShaadiPanda plans to be the main choice for any occasion.
ShaadiPanda is a small company with bigger goals. Keeping in mind the end goal is to achieve its
elevated objectives. ShaadiPanda must concentrate on the mission behind the vision. It will take every
one of the workers, partners, organizers, and planners day by day living the vision that ShaadiPanda
speaks to. An online portal for all those who want to spend their weddings hassle free. Book your favorite
 venue and event planners now!We provide a convenient solution to all kinds of venue bookings across Karachi.</p>
          <h1>Vision</h1>
          <p>In a consistently evolving, competitive world, our goals will be too much dependent on our
actions and how we market our service. Connection within the company should be very strong.
ShaadiPanda endeavors to be the best selection of customers by facilitating their events and
delivering them the services hassle free and trouble free. Through reliable, unsurprising
demonstrable skill, ShaadiPanda will guarantee a stress and bother free events with exclusive
discounts and packages which will only be available through ShaadiPanda.
In any case, not every one of our customers will be external. ShaadiPanda has inward customers to
satisfy too. ShaadiPanda will strive to give the same unsurprising and expert workplace to its
representatives and contracted sellers, without biasness remunerating them for their work. It is
additionally a need to bring home the right earnings for its partners, managers, full-time staff,
and their families.
Keeping tuned in to the necessities of the market, using the most recent innovation and patterns,
all while guaranteeing the customer gets the individual consideration they need, is the vision and
every day mission of ShaadiPanda; The Event Planning Specialists.
</p>
        </main>
      </div>
      <div className="wrapper bgded overlay">
        <div className="hoc container testimonials clear"> 
          <article><img src={icon} />
            <h6 className="heading">Fidel Catto</h6>
            <em>Brand Manager</em>
          </article>
        </div>
      </div>
      </div>
    );
};

export default Home;