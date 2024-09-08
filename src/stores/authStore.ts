import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { signInWithPopup, signOut, AuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";
import { User } from "../types/auth";

interface AuthState {
  user: User;
  error: string;
  loading: boolean;
  signIn: (provider: AuthProvider) => Promise<void>;
  signOut: () => Promise<void>;
}

const AUTH_INIT_STATE = {
  user: {} as User,
  error: "",
  loading: false,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...AUTH_INIT_STATE,

      /**
       * This method will handle user sign-in with a given provider
       */
      signIn: async (provider: AuthProvider) => {
        set({ loading: true, error: "" });
        try {
          const result = await signInWithPopup(auth, provider);
          const user: User = {
            uid: result.user.uid,
            email: result.user.email || "",
            displayName: result.user.displayName || "",
            photoURL: result.user.photoURL || "",
          };
          set({ user });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ loading: false });
        }
      },

      /**
       * This method will handle user sign-out
       */
      signOut: async () => {
        set({ loading: true, error: "" });
        try {
          await signOut(auth);
          set({ ...AUTH_INIT_STATE });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
