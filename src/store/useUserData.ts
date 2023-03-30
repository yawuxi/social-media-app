import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  id: string;
  email: string;
  authUser: () => void;
};

export const useUserData = create<State>()(
  devtools((setState) => ({
    id: "",
    email: "",
    authUser: async () => {},
  }))
);
