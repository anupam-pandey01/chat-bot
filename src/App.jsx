import './App.css';
import logo from './assets/chatbot-white.svg';
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg"
import home from "./assets/home.svg"
import saved from "./assets/bookmark.svg"
import rocket from "./assets/rocket.svg"
import sendBtn from "./assets/send.svg"
import userIcon from "./assets/user-icon.png"
import getImgLogo from "./assets/Chatbot.jpg"
// import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';


function App() {
  const[input, setInput] = useState("");
  const[messages, setMessages] = useState([
    {
      text: "Hi there! How can I help you today?",
      isBot: true,
    }
  ])

  const url = "http://localhost:5000/api/chat"
  const handleSend = async ()=>{
    const text = input;
    setInput('');
    setMessages([
    ...messages,
    { text, isBot: false }
   ])

    const response = await fetch(url, {
      method: "POST",
      headers:{
                "Content-Type": "application/json"
              },
      body: JSON.stringify({ message: text })
    });

    const { reply } = await response.json();
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: reply, isBot: true}
    ]);
  }

  function handleEnter(e){
    if(e.key === 'Enter') handleSend();
  }

  async function handleQuery(e){
    const text = e.target.value;
    setMessages([
    ...messages,
    { text, isBot: false }
   ])

    const response = await fetch(url, {
      method: "POST",
      headers:{
                "Content-Type": "application/json"
              },
      body: JSON.stringify({ message: text })
    });

    const { reply } = await response.json();
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: reply, isBot: true}
    ]);
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={logo} alt="logo" className="logo" />
            <span className="brand">Chat Bot</span>
          </div>
          <button className="midBtn" onClick={()=>{window.location.reload()}}><img src={addBtn} alt="Newchat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value={"What is programming ?"}><img src={msgIcon} alt="Query"  />What is programming ?</button>
            <button className="query" onClick={handleQuery} value={"What is API ?"}><img src={msgIcon} alt="Query" />What is API ?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Rocket" className="listItemsImg" />Upgrad to Pro</div>
        </div>
      </div>
      <div className="main">
          <div className="chats">
            {messages.map((message, i)=>{
              return <div className={message.isBot ? "chat bot": "chat"} key={i}>
                       <img src={message.isBot ? getImgLogo : userIcon} alt="logo" className='logo chatImg'/> <p className="text"> <ReactMarkdown>{ message.text }</ReactMarkdown> </p>
                     </div>
            })}
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder='Send a message' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
            </div>
            <p>Chat bot may produce inaccurate unformation about people, places, or facts.</p>
          </div>
      </div>
    </div>
  )
}

export default App
