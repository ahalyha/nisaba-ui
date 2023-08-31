import { IMessage } from "src/types/message";
import { api, apiPrivate } from ".";

export const sendMessage = async ({
  text,
  scope,
}: {
  text: string;
  scope: "private" | "public";
}) => {
  try {
    if (scope === "public") {
      const { data } = await api.post(`/process_message`, { text });
      return data as IMessage;
    } else {
      const { data } = await apiPrivate.get(`/llama2`, {
        params: { query: text },
      });
      return data as IMessage;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
