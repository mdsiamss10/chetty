import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import ChatPage from "./components/chat/ChatPage";
import LoginPage from "./components/login/LoginPage";

async function Home() {
  const session = await getServerSession(authOptions);
  return <>{session ? <ChatPage /> : <LoginPage />}</>;
}

export default Home;
