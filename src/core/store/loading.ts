import { create } from "zustand";

type LoadingStore = {
  isLoading: boolean;
  init: VoidCallback;
  stop: VoidCallback;
};

export const useLoading = create<LoadingStore>()((set) => ({
  isLoading: false,
  init: () => set({ isLoading: true }),
  stop: () => set({ isLoading: false }),
}));
