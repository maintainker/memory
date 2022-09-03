import create from "zustand";

interface User {
  name: string;
  access?: string;
}

interface UserStore {
  user: User;
  setUser: (state: User) => void;
  clearUser: () => void;
}

const initialState: User = {
  name: "",
};

const useUserStore = create<UserStore>((set) => ({
  user: { ...initialState },
  setUser: (user) => set((state) => ({ ...state, user })),
  clearUser: () => set((state) => ({ ...state, user: { ...initialState } })),
}));

export default useUserStore;
