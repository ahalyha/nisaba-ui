import { Box, styled } from "@mui/material";

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  visibility: "visible",

  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  marginBottom: theme.spacing(8),

  animation: "fadeIn 3s ease-in, move 3s ease-in-out",

  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "30%": {
      opacity: 0,
    },
    "50%": {
      opacity: 1,
    },
  },

  "@keyframes move": {
    "0%": {
      top: "50%",
    },
    "50%": {
      top: "50%",
    },
    "100%": {
      top: "10%",
    },
  },
}));

export const PageContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
