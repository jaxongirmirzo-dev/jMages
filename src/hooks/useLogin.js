import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const logIn = async (email, password) => {
    setIsPending(true);
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("Authentication is failed");
      }

      toast.success(`Welcome comeback, ${auth.currentUser.displayName}`);

      dispatch(login(req.user));
      Navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };
  return { logIn, isPending };
};
