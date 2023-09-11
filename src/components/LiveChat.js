import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  //Subscribe to Store
  const chatMsg = useSelector((store) => store.chat.messages);

  //Every 2 seconds giving data
  useEffect(() => {
    const api = setInterval(() => {
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: "Danny Agarwal",
          message: "LoreN IpSum DollAr",
        })
      );
    }, 2000);

    return () => clearInterval(api);
  }, []);

  return (
    <>
      <div className="w-96 border border-black p-1 mr-2 h-[600px] bg-slate-100 overflow-auto">
        {chatMsg.map((c, index) => (
          <ChatMessage
            name={c.name}
            key={index}
            message={c.message + " " + index}
          />
        ))}
      </div>
    </>
  );
};

export default LiveChat;
