import { useMutation } from "@tanstack/react-query";

import { sendMessage } from "../api/messages";

export const useSendMessage = () => {
  return useMutation(({ text }: { text: string }) => sendMessage({ text }), {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      const messages = JSON.parse(localStorage.getItem("messages") ?? "") || [];
      messages.push({ isRequest: false, text: data.text, links: data.links });
      localStorage.setItem("messages", JSON.stringify(messages));
      window.dispatchEvent(new Event("storage"));
    },
  });
};
