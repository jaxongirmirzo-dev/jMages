import { useSelector } from "react-redux";
import { useLogOut } from "../hooks/useLogout";
import { logout } from "../app/features/userSlice";

function Navbar() {
  const { logOut, isPending } = useLogOut();
  const { user } = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className="flex container items-center mt-6">
      <h1 className="text-5xl font-mono text-shadow-accent mr-auto [text-shadow:1px_10px_5px_rgba(0,0,0,0.3)]">
          Jimages
        </h1>
      <div className="flex items-center mr-auto">
          <img
            className="rounded-full bg-black/45 shadow-[0_4px_10px_black] hover:cursor-pointer mr-4"
            src={user?.photoURL}
            alt="user ava"
            width={80}
          />
          <h3 className="text-2xl font-sans underline">{user?.displayName}</h3>
        </div>

    </div>
  );
}

export default Navbar;
