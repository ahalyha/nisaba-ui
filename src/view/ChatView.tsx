import { ChatInput } from "src/components/input/ChatInput";
import { ChatContent } from "src/components/content/ChatContent";

import { LogoContainer, PageContainer } from "./ChatView.styled";
import { Box, Typography } from "@mui/material";

export const ChatView = () => {
  return (
    <PageContainer>
      <LogoContainer>
        <Typography variant="h1" component="h1" fontWeight={600} marginBottom={0}>
          Nisaba
        </Typography>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.unleash.ai/wp-content/uploads/2021/10/textkernel-white-resized-new.png"
          height={70}
          style={{ objectFit: "contain" }}
          alt="logo"
        />
      </LogoContainer>
      <ChatContent />
      <ChatInput />
    </PageContainer>
  );
};
