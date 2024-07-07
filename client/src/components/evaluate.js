import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import hh from "./cb1.jpg"
function BotMsg({ content }) {
  return (
    <div className="chat chat-start photodali">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          <img className="kilo" alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="chat-bubble chat-bubble-accent">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

function UserMsg({ content }) {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-success">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default function Evaluate() {
  const [allChats, setAllChats] = useState([
    {
      sender: "bot",
      content:
        "Hey there! Ready to put your startup idea to the test? Share the details, and I'll give you a quick analysis on its potential for success!",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  async function getAnswer() {
    if (inputMessage.trim() === "") {
      return;
    }
    if (inputMessage.length < 100) {
      let temp_chats = allChats;
      temp_chats.push({ sender: "user", content: inputMessage });
      temp_chats.push({
        sender: "bot",
        content:
          "The pitch lacks clarity in communicating the core concept of the startup. It's essential to clearly articulate what the business does and its value proposition in a concise manner.",
      });
      setInputMessage("");
      setAllChats(temp_chats);
      return;
    }
    document
      .getElementById("diable-when-loading-1")
      .classList.add("btn-disabled");
    document
      .getElementById("diable-when-loading-2")
      .classList.add("btn-disabled");
    const tempInputMessage = inputMessage;
    let answer = { sender: "bot", content: "" };
    const api_res = await fetch(
      `https://evalgpt-production-3596.up.railway.app/predict`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea: tempInputMessage }),
      }
    );
    const api_data = await api_res.json();
    answer.content = api_data.content;
    let temp_chats = allChats;
    temp_chats.push({ sender: "user", content: inputMessage });
    setAllChats(temp_chats);
    setInputMessage("");
    temp_chats.push(answer);
    setAllChats(temp_chats);
    document
      .getElementById("diable-when-loading-1")
      .classList.remove("btn-disabled");
    document
      .getElementById("diable-when-loading-2")
      .classList.remove("btn-disabled");
  }

  return (
    <div className="bg-base-300 h-screen p-20" style={{ height: "90vh" }}>
      <div
        className="p-5 rounded-md outline outline-4 bg-base-200 snap-y overflow-y-auto"
        style={{ maxHeight: "calc(100% - 5rem)" }}
      >
        {allChats.map((chat, index) =>
          chat.sender === "user" ? (
            <UserMsg key={index} content={chat.content} />
          ) : (
            <BotMsg key={index} content={chat.content} />
          )
        )}
      </div>
      <div className="form-control mt-10 flex flex-row">
        <textarea
          id="diable-when-loading-1"
          className="textarea textarea-bordered bg-white text-black flex-grow mx-5"
          placeholder="Ask anything..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></textarea>
        <label className="label">
          <span className="label-text-alt"></span>
          <button
            id="diable-when-loading-2"
            className="diable-when-loading btn bg-sky-500 text-white"
            onClick={getAnswer}
          >
            Send!
          </button>
        </label>
      </div>
    </div>
  );
}
