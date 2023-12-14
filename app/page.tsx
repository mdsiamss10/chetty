import { authOptions } from "@/lib/auth";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import ChatPage from "./components/chat/ChatPage";
import LoginPage from "./components/login/LoginPage";

export const metadata: Metadata = {
  title: "Chetty",
  description: "Chetty site homepage",
};

async function Home() {
  const session = await getServerSession(authOptions);
  return <>{session ? <ChatPage /> : <LoginPage />}</>;
}

export default Home;
