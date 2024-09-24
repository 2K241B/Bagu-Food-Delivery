import { Navbar } from "@/components/Navbar";
import { Footer } from "./login/footer";
import { CreateCategory } from "@/components/CreateCategory";

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <Footer /> */}
      <CreateCategory />
    </div>
  );
}
