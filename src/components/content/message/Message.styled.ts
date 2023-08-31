import { Box, styled } from "@mui/material";

export const SentMessage = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  color: "#000",
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(2),
  marginLeft: "auto",
  marginBottom: theme.spacing(1),
  width: "fit-content",
  maxWidth: "40%",
}));

export const ReceivedMessage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  backgroundColor: theme.palette.divider,
  color: theme.palette.secondary.contrastText,
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(2),
  marginRight: "auto",
  marginBottom: theme.spacing(1),
  width: "fit-content",
  maxWidth: "40%",
  whiteSpace: "pre-wrap",
}));

export const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));
