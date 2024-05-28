"use client"
import Cookie from "js-cookie"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  
  const handleLogin = () => {
    Cookie.set("auth_token", "asd12asd5a66a4dasd89asd")
    router.push("/dashboard")
  }
  return (
    <div className="max-w-[1920px] w-full md:px-20 px-4 mx-auto h-screen bg-zinc-500 flex items-center justify-center">
      <button onClick={handleLogin} className="px-5 py-2 rounded shadow-xl font-medium text-white bg-black hover:bg-black/70 transition duration-200">Logar</button>
    </div>
  );
}
