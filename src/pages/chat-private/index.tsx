import Head from "next/head";
import { ChatView } from "src/view/ChatView";

export default function ChatPage() {
  return (
    <>
      <Head>
        <title>Nisaba</title>
      </Head>
      <main>
        <ChatView scope="private" />
      </main>
    </>
  );
}
