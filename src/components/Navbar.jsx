import { useSelector } from "react-redux";
import { useLogOut } from "../hooks/useLogout";
import { logout } from "../app/features/userSlice";

function Navbar() {
  const { logOut, isPending } = useLogOut();
  const { user } = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className="flex">
      <h1>Navbar</h1>
      <img className="rounded-full" src={user?.photoURL} alt="" width={200} />
      <h3>{user?.displayName}</h3>
      {!isPending && (
        <button onClick={logOut} className="btn btn-primary">
          LogOut
        </button>
      )}

      {isPending && (
        <button disabled className="btn btn-primary">
          LogOut
        </button>
      )}
    </div>
  );
}

export default Navbar;
