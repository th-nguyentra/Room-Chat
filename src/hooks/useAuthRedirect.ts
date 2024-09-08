import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore"; // Adjust the import path as necessary

const useAuthRedirect = () => {
  const { user } = useAuthStore((state) => ({
    user: state.user,
  }));
  const navigate = useNavigate();

  useEffect(() => {
    if (user.uid) {
      navigate("/room-chat/");
    }
  }, [user, navigate]);
};

export default useAuthRedirect;
