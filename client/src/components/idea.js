import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IdeaCard from "./ideacard";

// Tag component
const Tag = ({ label, onClick }) => (
  <button className="tag" onClick={onClick}>
    {label}
  </button>
);


async function getIdeas() {
  try {
    const response = await fetch("http://localhost:8000/showcase");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.startups;
  } catch (error) {
    console.error("Error fetching startup data:", error.message);
    return [];
  }
}

// Marketplace component
export default function Idea() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [startups, setStartups] = useState([]);
  const allTags = [
    "Tech",
    "Fashion",
    "Travel",
    "Entertainment",
    "Fitness",
    "Sustainability",
    "Education",
    "Food and Beverages",
    "Blockchain",
    "AI",
    "Security",
  ];

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const startupsData = await getIdeas();
        setStartups(startupsData);
      } catch (error) {
        console.error("Error fetching startup data:", error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const filteredStartups = selectedTags.length
    ? startups.filter((startup) =>
        startup.tags.some((tag) => selectedTags.includes(tag))
      )
    : startups;

  const handleTagClick = (tag) => {
    if (allTags.includes(tag)) {
      setSelectedTags([tag]);
    } else {
      setSelectedTags(allTags);
    }
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="flex space-x-2 p-4 justify-center">
        <Tag label="All" onClick={() => setSelectedTags([])} />
        {allTags.map((tag, index) => (
          <React.Fragment key={index}>
            <div className="tag-divider">|</div>
            <Tag label={tag} onClick={() => handleTagClick(tag)} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-centre mm">
      <Link to="/showcase/post" className="btn btn-success">ADD IDEA</Link>
      </div>
      <div className="flex justify-center flex-wrap">
        {filteredStartups.map((startup, index) => (
          <IdeaCard key={index} {...startup} />
        ))}
      </div>
    </div>
  );
}
