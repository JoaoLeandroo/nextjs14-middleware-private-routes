"use client"
import Cookie from "js-cookie"
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter()
  
  const handleLogout = () => {
    Cookie.remove("auth_token")
    router.push("/")
  }
  return (
    <div className="max-w-[1920px] w-full md:px-20 px-4 mx-auto h-screen bg-zinc-500 flex items-center justify-center">
      <button onClick={handleLogout} className="px-5 py-2 rounded shadow-xl font-medium text-white bg-red-400 hover:bg-red-400/70 transition duration-200">Logout</button>
    </div>
  );
}
