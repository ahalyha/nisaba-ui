import { ILocalMessage } from "src/types/message";
import { LinksContainer, ReceivedMessage, SentMessage } from "./Message.styled";
import { FC } from "react";
import { Link } from "@mui/material";

interface MessageProps {
  message: ILocalMessage;
}

export const Message: FC<MessageProps> = ({ message }: MessageProps) => {
  if (message.text) {
    return message.isRequest ? (
      <SentMessage>{message.text}</SentMessage>
    ) : (
      <ReceivedMessage>
        {message.text}
        <LinksContainer>
          {message.links.map((link, index) => (
            <Link href={link} key={link}>
              source {index + 1}
            </Link>
          ))}
        </LinksContainer>
      </ReceivedMessage>
    );
  }
};
