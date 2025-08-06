import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../app/features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export const useLogOut = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const logOut = async () => {
    setIsPending(true);
    try {
      await signOut(auth);

      toast.success(`See you`);

      dispatch(logout());
      Navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };
  return { logOut, isPending };
};
