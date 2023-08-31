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
