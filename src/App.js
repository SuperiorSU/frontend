import React from 'react';
import './App.css';

const speakers = [
  {
    name: "Person 1",
    title: "Principal Architect",
    company: "Google Cloud",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Person 2",
    title: "Manager - Cloud Engineering",
    company: "KPMG Global Services",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Person 3",
    title: "Developer Advocate",
    company: "Google Cloud",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Person 4",
    title: "UX Designer | Freelancer | WTM Ambassador",
    company: "Founder of UI UX Design School",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Person 5",
    title: "Data Scientist",
    company: "Google AI",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Person 6",
    title: "Product Manager",
    company: "YouTube",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Person 7",
    title: "Software Engineer",
    company: "Google Cloud",
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Person 8",
    title: "Technical Writer",
    company: "Google Developers",
    img: "https://via.placeholder.com/150",
  },
];

function App() {
  const title = "DevFest 2024: Meet Our Inspiring Speakers";
  const colors = ['#4285F4', '#DB4437', '#F4B400', '#4285F4', '#0F9D58', '#DB4437']; // Google colors in specified pattern

  return (
    <div className="App">
      <header className="header">
        <h1>
          {title.split(' ').map((word, index) => (
            <span key={index} style={{ color: colors[index % colors.length] }}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <p className="intro-paragraph">
          Our lineup of speakers includes pioneering leaders, advocates, and visionaries from diverse fields and backgrounds. These experts are not only at the forefront of their industries but also actively drive positive change in their communities, organizations, and beyond. Through their insights, innovation, and passion, they are making a lasting impact globally. Get ready to be inspired by their stories, knowledge, and commitment to a brighter future.
        </p>
      </header>
      <div className="speakers-container">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <img src={speaker.img} alt={speaker.name} className="speaker-img" />
            <h3>{speaker.name}</h3>
            <p>{speaker.title}</p>
            <p>{speaker.company}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>Explore more Google services:</p>
        <ul>
          <li><a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">Google Cloud</a></li>
          <li><a href="https://developers.google.com" target="_blank" rel="noopener noreferrer">Google Developers</a></li>
          <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
        </ul>
        <div className="button-container">
          <button className="google-button">Learn More</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
