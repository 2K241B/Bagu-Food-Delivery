import { Navbar } from "@/components/Navbar";
import { Footer } from "./login/footer";
import { ForgetPassword } from "./forgetPassword/forgetPassword";
import { ResetPassword } from "./forgetPassword/resetPassword";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* <ForgetPassword /> */}
      {/* <ResetPassword /> */}

      <Footer />
    </div>
  );
}
