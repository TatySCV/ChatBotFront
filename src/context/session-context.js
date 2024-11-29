import { create } from "zustand";

const sessionStore = create((set) => ({
  user: null,
  isAuth: false,
  isLoading: true,
  login: (user) => set({ user }),
  setIsAuth: (isAuth) => set({ isAuth }),
  logout: () => set({ user: null }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export const useSession = sessionStore;
