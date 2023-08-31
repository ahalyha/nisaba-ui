import { useEffect, useState } from "react";
import { ContentContainer } from "./ChatContent.styled";
import { Message } from "./message/Message";
import { ILocalMessage } from "src/types/message";

export const ChatContent = () => {
  const [messages, setMessages] = useState<ILocalMessage[]>([]);

  useEffect(() => {
    const handleMessageChanges = () => {
      const localMessages = localStorage.getItem("messages");
      if (localMessages) {
        setMessages(JSON.parse(localMessages));
        return;
      }
    };
    handleMessageChanges();
    window.addEventListener("storage", handleMessageChanges);

    return () => {
      window.removeEventListener("storage", handleMessageChanges);
    };
  }, []);

  return (
    <ContentContainer>
      {messages.map((message, index) => (
        <Message key={`${message.text}-${index}`} message={message} />
      ))}
    </ContentContainer>
  );
};
