import { getToken } from "Shared/api/users/index.api";
import create from "zustand";

interface User {
  // name: string;
  access?: string;
}

interface UserStore {
  user: User;
  isBoot: boolean;
  boot: () => Promise<void>;
  setUser: (state: User) => void;
  clearUser: () => void;
}

const initialState: User = {};

const useUserStore = create<UserStore>((set) => ({
  user: { ...initialState },
  isBoot: false,
  boot: async () => {
    try {
      const res = await getToken();
      res &&
        localStorage.setItem(
          "memory-user",
          JSON.stringify({
            access: res["access"],
            accessExpire: res["access_expire"],
            refreshExpire: res["refresh_expire"],
          }),
        );
      set((state) => ({ ...state, isBoot: true, user: { access: res?.access } }));
    } catch (error) {
      set((state) => ({ ...state, isBoot: true }));
    }
  },
  setUser: (user) => set((state) => ({ ...state, user })),
  clearUser: () => set((state) => ({ ...state, user: { ...initialState } })),
}));

export default useUserStore;
