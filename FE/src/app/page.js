import { Navbar } from "@/components/Navbar";
import { Footer } from "./login/footer";
import { CreateFood } from "@/components/CreateFood";

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <Footer /> */}
      <CreateFood />
    </div>
  );
}
