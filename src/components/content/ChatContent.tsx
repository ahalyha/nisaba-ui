import { useEffect, useState } from "react";
import { ContentContainer, Progress } from "./ChatContent.styled";
import { Message } from "./message/Message";
import { ILocalMessage } from "src/types/message";

export const ChatContent = ({
  isLoadingMessage,
}: {
  isLoadingMessage: boolean;
}) => {
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
      {isLoadingMessage && (
        <Progress>
          <div></div>
          <div></div>
          <div></div>
        </Progress>
      )}
    </ContentContainer>
  );
};
