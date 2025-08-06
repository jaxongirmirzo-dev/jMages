import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const signup = async (displayName, email, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("Authentication is failed");
      }
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL:
          "https://api.dicebear.com/9.x/croodles/svg?seed=Jade" + displayName,
      });
      toast.success(`Welcome, ${auth.currentUser.displayName}`);

      dispatch(login(req.user));
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };
  return { signup, isPending };
};
