import { create } from "zustand";

type FocusedInputStore = {
  focusedField: string | null;
  focus: (fieldName: string) => void;
  blur: VoidCallback;
};

export const useFocusedInput = create<FocusedInputStore>()((set) => ({
  focusedField: null,
  focus: (fieldName: string) => set({ focusedField: fieldName }),
  blur: () => set({ focusedField: null }),
}));
