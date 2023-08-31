import SendIcon from "@mui/icons-material/Send";
import {
  ChatInputButton,
  ChatInputContainer,
  ChatInputStyled,
} from "./ChatInput.styled";
import { useState } from "react";
import { useSendMessage } from "src/server/hooks/useSendMessage";

export const ChatInput = ({scope}:{scope: "private" | "public"}) => {
  const [text, setText] = useState("");
  const { mutate: onSend } = useSendMessage({scope});

  const handleSendMessage = () => {
    if (!text) return;

    const localMessages = localStorage.getItem("messages");

    if (localMessages) {
      const messages = JSON.parse(localMessages);
      messages.push({ isRequest: true, text, links: [] });
      localStorage.setItem("messages", JSON.stringify(messages));
    } else {
      localStorage.setItem(
        "messages",
        JSON.stringify([{ isRequest: true, text, links: [] }])
      );
    }

    window.dispatchEvent(new Event("storage"));

    onSend({ text });
    setText("");
  };

  return (
    <ChatInputContainer>
      <ChatInputStyled
        variant="outlined"
        placeholder="Ask your question"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChatInputButton onClick={handleSendMessage}>
        <SendIcon sx={{ color: "black" }} />
      </ChatInputButton>
    </ChatInputContainer>
  );
};
