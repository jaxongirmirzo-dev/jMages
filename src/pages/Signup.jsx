import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import { useSignup } from "../hooks/useSignup";
function Signup() {
  const { signup, isPending } = useSignup();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("nickname");
    const email = formData.get("email");
    const password = formData.get("password");

    await signup(displayName, email, password);
  };

  return (
    <main>
      <div className="regestration hidden lg:flex h-full grow"></div>
      <div className="regestration grow lg:bg-none grid place-items-center">
        <div className="fixed top-0 left-0 bottom-0 w-full bg-black/40 lg:hidden z-10 h-screen"></div>
        <div className="relative z-20">
          <h1 className="text-3xl text-white lg:text-black">Signup</h1>
          <form onSubmit={handelSubmit} className="w-96">
            <InputForm label="NickName" name="nickname" type="text" />

            <InputForm label="Email" name="email" type="email" />
            <InputForm label="Password" name="password" type="password" />
            <div className="mt-5 ">
              {isPending && (
                <button
                  className="btn btn-accent rounded-none w-[385px]"
                  disabled
                >
                  <span className="loading loading-spinner text-primary"></span>
                </button>
              )}
              {!isPending && (
                <button className="btn btn-accent rounded-none w-[385px]">
                  Signup
                </button>
              )}
            </div>
          </form>
          <p className="text-white lg:text-black text-center mt-3">
            If you already have an account, please{" "}
            <Link className=" link link-primary" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Signup;
