import React, { useState } from "react";

const IdeaCard = ({
  name,
  tagline,
  tags,
  description,
  owner,
  mail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card w-96 m-5 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title overflow-hidden whitespace-nowrap overflow-ellipsis">
          {name}
        </h2>
        <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
          {tagline}
        </p>
        <div className="text-xs italic">
          {tags && tags.length > 0 && (
            <div className="flex space-x-2 mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            View More...
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
          <div className="relative p-8 mx-auto max-w-2xl">
            <div className="bg-base-100 rounded-xl shadow-lg">
              <div className="flex justify-end">
                <button
                  className="p-4 text-gray-600 hover:text-gray-800"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
              <div className="p-8">
                {/* Content of your modal */}
                <h2 className="text-primary text-5xl font-bold mb-4">{name}</h2>
                <p className="text-secondary mb-4">{tagline}</p>
                {tags && tags.length > 0 && (
                  <div className="flex space-x-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="tag bg-gray-300 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-gray-700 my-4">{description}</p>
                <a className="link link-primary" href="https://www.youtube.com">
                  YouTube
                </a>
                <span className="text-secondary">|</span>
                <a
                  className="link link-primary"
                  href="https://www.instagram.com"
                >
                  Instagram
                </a>
                <button className="block my-4 btn btn-success">Fund</button>
                <a
                  href={`mailto:${mail}`}
                  className="btn mb-4 btn-primary btn-outline"
                >
                  Contact {owner}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaCard;
