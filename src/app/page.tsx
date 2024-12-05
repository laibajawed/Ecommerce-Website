import Image from "next/image";
import Herosec from "./components/Herosec";
import Navbar from "./components/Navbar";
import Aboutsec from "./components/Aboutsec";
import Projectsec from "./components/Projectsec";
import Emailsec from "./components/Emailsec";
import Footer from"./components/Footer"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <Herosec/>
        <Aboutsec/>
        <Projectsec/>
        <Emailsec/>
        </div>
        <Footer/>
    </main>

  );
}
