import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName, generateRandomText } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatData = useSelector((store) => store.chat.messages);

  const [input, setInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling
      const random = Math.round(Math.random() * 100);
      dispatch(
        addMessage({
          user: generateRandomName(),
          text: "Lorem Ipsum Dolor Sit Amet " + generateRandomText(10),
        })
      );

      console.log("Api polling");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-[390px] flex flex-col ">
        <div className="border border-slate-200 h-6 w-full text-sm text-center">
          Live Chats
        </div>
        <div className="flex flex-col-reverse overflow-y-scroll">
          {chatData &&
            chatData.map((chat, i) => (
              <ChatMessage key={i} user={chat.user} text={chat.text} />
            ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ user: "Kumar Hrithik", text: input }));
        }}
        className="flex border ml-0 mt-2 w-full "
      >
        <input
          className="px-2 w-[75%]"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className=" border  text-sm  px-5 ml-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
