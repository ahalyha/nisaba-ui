import { useEffect, useState } from "react";
import { ContentContainer, Progress } from "./ChatContent.styled";
import { Message } from "./message/Message";
import { ILocalMessage } from "src/types/message";

export const ChatContent = ({
  isLoadingMessage,
  scope,
}: {
  scope: "private" | "public";
  isLoadingMessage: boolean;
}) => {
  const [messages, setMessages] = useState<ILocalMessage[]>([]);
  const localStorageReference = scope === "public" ? "messages" : "messages-private"

  useEffect(() => {
    const handleMessageChanges = () => {
      const localMessages = localStorage.getItem(localStorageReference);
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
  }, [localStorageReference]);

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
