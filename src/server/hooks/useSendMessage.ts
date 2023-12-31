import { useMutation } from "@tanstack/react-query";

import { sendMessage } from "../api/messages";

export const useSendMessage = ({ scope }: { scope: "public" | "private" }) => {
  return useMutation(
    ({ text }: { text: string }) => sendMessage({ text, scope }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        const localStorageReference = scope === "public" ? "messages" : "messages-private"
        const messages =
          JSON.parse(localStorage.getItem(localStorageReference) ?? "") || [];
        messages.push({ isRequest: false, text: data.text, links: data.links });
        localStorage.setItem(localStorageReference, JSON.stringify(messages));
        window.dispatchEvent(new Event("storage"));
      },
    },
  );
};
