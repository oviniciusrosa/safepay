import { create } from "zustand";
import { IMessage } from "~/core/interfaces/message";

import { v4 } from "uuid";

type MessageCreationModel = Omit<IMessage, "id"> & {
  id?: string;
};

type MessageStore = {
  activeMessages: IMessage[];

  showMessage: (msg: MessageCreationModel) => void;
  hideMessage: (id: string) => void;
};

export const useMessage = create<MessageStore>()((set) => ({
  activeMessages: [],
  showMessage: (msg) => {
    const message: IMessage = {
      ...msg,
      id: msg?.id ?? v4(),
    };

    set((state) => ({ activeMessages: [...state.activeMessages, message] }));
  },
  hideMessage: (id) => {
    set((state) => ({
      activeMessages: state.activeMessages.filter((msg) => msg.id !== id),
    }));
  },
}));
