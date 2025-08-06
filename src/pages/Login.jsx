import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { logIn, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    logIn(email, password);
  };
  return (
    <main>
      <div className="regestration hidden lg:flex h-full grow"></div>
      <div className="regestration grow lg:bg-none grid place-items-center">
        <div className="fixed top-0 left-0 bottom-0 w-full bg-black/40 lg:hidden z-10 h-screen"></div>
        <div className="relative z-20">
          <h1 className="text-3xl text-white lg:text-black">Login</h1>
          <form onSubmit={handleSubmit} className="w-96">
            <InputForm label="Email" name="email" type="email" />
            <InputForm label="Password" name="password" type="password" />
            <div className="mt-5">
              <button className="btn btn-accent rounded-none w-[385px]">
                Login
              </button>
            </div>
          </form>
          <p className="text-white lg:text-black text-center mt-3">
            If you don't have an account, please{" "}
            <Link className=" link link-primary" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
