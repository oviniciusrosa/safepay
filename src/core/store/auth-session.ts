import { create } from "zustand";
import { IAuthSession } from "../interfaces/auth-session";

type AuthStore = {
  session: IAuthSession | null;
  signIn: (session: IAuthSession) => void;
  signOut: VoidCallback;
};

export const useAuthSession = create<AuthStore>()((set) => ({
  session: null,
  signIn: (session: IAuthSession) => set({ session }),
  signOut: () => set({ session: null }),
}));
