import SendIcon from "@mui/icons-material/Send";
import {
  ChatInputButton,
  ChatInputContainer,
  ChatInputStyled,
} from "./ChatInput.styled";
import { useEffect, useState } from "react";
import { useSendMessage } from "src/server/hooks/useSendMessage";

export const ChatInput = ({
  scope,
  isLoadingMessage,
  setIsLoadingMessage,
}: {
  scope: "private" | "public";
  isLoadingMessage: boolean;
  setIsLoadingMessage: (val: boolean) => void;
}) => {
  const [text, setText] = useState("");
  const { mutate: onSend, isLoading } = useSendMessage({ scope });

  const localStorageReference = scope === "public" ? "messages" : "messages-private"

  const handleSendMessage = () => {
    if (!text) return;

    const localMessages = localStorage.getItem(localStorageReference);

    if (localMessages) {
      const messages = JSON.parse(localMessages);
      messages.push({ isRequest: true, text, links: [] });
      localStorage.setItem(localStorageReference, JSON.stringify(messages));
    } else {
      localStorage.setItem(
        localStorageReference,
        JSON.stringify([{ isRequest: true, text, links: [] }]),
      );
    }

    window.dispatchEvent(new Event("storage"));

    onSend({ text });
    setText("");
  };

  useEffect(() => {
    if (isLoadingMessage !== isLoading) {
      setIsLoadingMessage(isLoading);
    }
  }, [isLoading, isLoadingMessage, setIsLoadingMessage]);
  return (
    <ChatInputContainer>
      <ChatInputStyled
        variant="outlined"
        placeholder="Ask your question"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSendMessage();
            event.preventDefault();
          }
        }}
      />
      <ChatInputButton onClick={handleSendMessage}>
        <SendIcon sx={{ color: "black" }} />
      </ChatInputButton>
    </ChatInputContainer>
  );
};
