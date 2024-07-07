import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MarketplacePost() {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [desc, setdesc] = useState("");
  const [equity, setequity] = useState("");
  const [price, setprice] = useState("");
  const [owner, setowner] = useState("");
  const [Tagline, setTagline] = useState("");

  const navigate = useNavigate();
  const submithandler = async (e) => {
    try {
      const response = await fetch("http://localhost:8000/marketplace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          tagline: Tagline,
          tags: selectedTags,
          description: desc,
          equity: equity,
          price: price,
          owner: owner,
          mail: email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      navigate("/marketplace");
    } catch (error) {
      console.log(error)
      return;
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body w-screen">
            <div className="form-control w-5/6">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-control w-5/6">
              <label className="label">
                <span className="label-text">Tagline</span>
              </label>
              <input
                type="text"
                placeholder="Tagline"
                className="input input-bordered"
                required
                value={Tagline}
                onChange={(e) => {
                  setTagline(e.target.value);
                }}
              />
            </div>
              <div className="h-2 mb-2">Tags</div>
            <div className="border-2 p-2 w-5/6 flex flex-wrap">
              {allTags.map((tag, index) => (
                <div key={index} className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text m-1">{tag}</span>
                    <input
                      type="radio"
                      name={tag}
                      className="radio checked:bg-blue-500"
                      value={tag}
                      onChange={(e) => {
                        const temp_tags = selectedTags;
                        temp_tags.push(tag);
                        setSelectedTags(temp_tags);
                      }}
                    />
                  </label>
                </div>
              ))}
            </div>
            <div className="form-control w-5/6">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="textarea textarea-bordered"
                required
                value={desc}
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-control w-5/6">
              <label className="label">
                <span className="label-text">Equity</span>
              </label>
              <input
                type="text"
                placeholder="Equity"
                className="input input-bordered"
                required
                value={equity}
                onChange={(e) => {
                  setequity(e.target.value);
                }}
              />
            </div>
            <div className="form-control w-5/6">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
            </div>
            <div className="form-control w-5/6">
              <label className="label">
                <span className="label-text">Owner</span>
              </label>
              <input
                type="text"
                placeholder="Owner"
                className="input input-bordered"
                required
                value={owner}
                onChange={(e) => {
                  setowner(e.target.value);
                }}
              />
            </div>
            <div className="form-control w-5/6">
              <label className="label">
                <span className="label-text">Mail</span>
              </label>
              <input
                type="text"
                placeholder="Mail"
                className="input input-bordered"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-control mt-6 w-5/6">
              <button className="btn btn-primary" onClick={submithandler}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
