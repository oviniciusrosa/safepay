import { create } from "zustand";

type AuthStore = {
  session: string | null;
  signIn: (session: string) => void;
  signOut: VoidCallback;
};

export const useAuthSession = create<AuthStore>()((set) => ({
  session: null,
  signIn: (session: string) => set({ session }),
  signOut: () => set({ session: null }),
}));
