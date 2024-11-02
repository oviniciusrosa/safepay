import { create } from "zustand";
import { IAuthSession } from "../interfaces/auth-session";

type AuthStore = {
  session: IAuthSession | null;
  isAuthenticated: boolean;
  signIn: (session: IAuthSession) => void;
  signOut: VoidCallback;
};

export const useAuthSession = create<AuthStore>()((set) => ({
  session: null,
  isAuthenticated: false,
  signIn: (session: IAuthSession) => set({ session, isAuthenticated: true }),
  signOut: () =>
    set((state) => ({
      session: { ...state.session, token: null },
      isAuthenticated: false,
    })),
}));
