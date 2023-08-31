import { IconButton, TextField, styled } from "@mui/material";

export const ChatInputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  gap: theme.spacing(1),

  animation: "fadeIn 5s ease-in",

  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "30%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export const ChatInputStyled = styled(TextField)({
  flex: 1,
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
});

export const ChatInputButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "none",
  borderRadius: theme.spacing(1),
  height: theme.spacing(7),
  width: theme.spacing(7),

  padding: "10px",
  backgroundColor: "#fff",
  cursor: "pointer",
  transition: "all .2s ease-in-out",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));
