import { Box, styled } from "@mui/material";

export const ContentContainer = styled(Box)(({ theme }) => ({
  overflow: "auto",
  padding: theme.spacing(2),
  marginTop: theme.spacing(25),
  gap: theme.spacing(4),
  boxShadow: theme.shadows[24],
  borderRadius: theme.spacing(2),
  borderColor: theme.palette.divider,
  borderWidth: 1,
  borderStyle: "solid",
  height: "100%",

  animation: "fadeIn 5s ease-in",

  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  "::-webkit-scrollbar": {
    display: "none",
  },
}));

export const Progress = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  "> div": {
    width: 16,
    height: 16,
    margin: "3px 6",
    borderRadius: "50%",
    backgroundColor: "#a3a1a1",
    opacity: 1,
    animation: "bouncing-loader 0.6s infinite alternate",
  },

  "@keyframes bouncing-loader": {
    to: {
      opacity: 0.1,
      transform: "translateY(-8px)",
    },
  },

  "> div:nth-child(2)": {
    animationDelay: "0.2s",
  },

  "> div:nth-child(3)": {
    animationDelay: "0.4s",
  },
});
