import { IMessage } from "src/types/message";
import { api } from ".";

export const sendMessage = async ({ text }: { text: string }) => {
  try {
    const { data } = await api.post(`/process_message`, { text });

    return data as IMessage;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
