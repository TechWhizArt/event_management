import React, { useState } from "react";
import "../styles/event.css"

const events = [
  {
    id: 1,
    title: "React Workshop",
    date: "20 July 2026",
    time: "10:00 AM",
    venue: "Delhi",
    organizer: "Code Academy",
    seats: 35,
    price: "₹499",
    category: "Workshop",
    description: "Learn React from scratch with hands-on projects.",
  },
  {
    id: 2,
    title: "Hackathon 2026",
    date: "25 July 2026",
    time: "09:00 AM",
    venue: "Noida",
    organizer: "Google Developer Club",
    seats: 120,
    price: "FREE",
    category: "Hackathon",
    description: "24-hour coding competition with exciting prizes.",
  },
  {
    id: 3,
    title: "AI Seminar",
    date: "28 July 2026",
    time: "11:00 AM",
    venue: "Lucknow",
    organizer: "Tech Community",
    seats: 60,
    price: "₹199",
    category: "Seminar",
    description: "Explore the future of Artificial Intelligence.",
  },
  {
    id: 4,
    title: "Startup Meetup",
    date: "2 August 2026",
    time: "05:00 PM",
    venue: "Gurgaon",
    organizer: "Startup India",
    seats: 80,
    price: "FREE",
    category: "Meetup",
    description: "Network with entrepreneurs and investors.",
  },
];

const EventCard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="event-page">

      {/* Hero */}
      <section className="hero">
        <h1>Discover Amazing Events</h1>
        <p>
          Workshops, Hackathons, Meetups and Seminars —
          all in one place.
        </p>
      </section>

      {/* Search */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>Search</button>
      </div>

      {/* Cards */}

      <div className="event-container">

        {events
          .filter((event) =>
            event.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((event) => (

            <div className="event-card" key={event.id}>

              <div className="card-top">

                <h2>{event.title}</h2>

                <span className="price">
                  {event.price}
                </span>

              </div>

              <p className="description">
                {event.description}
              </p>

              <div className="info">

                <p>📅 {event.date}</p>

                <p>⏰ {event.time}</p>

                <p>📍 {event.venue}</p>

                <p>👤 {event.organizer}</p>

                <p>🎟 Seats Left : {event.seats}</p>

                <p>🏷 {event.category}</p>

              </div>

              <button className="register-btn">
                Register Now
              </button>

            </div>

          ))}
      </div>

    </div>
  );
};

export default EventCard;