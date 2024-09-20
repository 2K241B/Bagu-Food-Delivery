import { Navbar } from "@/components/Navbar";
import { Footer } from "./login/footer";
import { Profile } from "@/app/userprofile/profile";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}
