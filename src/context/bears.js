export const bears = (set) => {
  return {
    bears: 8,
    reset: () => set({ bears: 0 }),
    inc: (payload) =>
      set((state) => {
        let updateBears = state.bears + payload;
        localStorage.setItem(
          "bears",
          state.bears
        )({ bears: state.bears + payload });
        return { bears: updateBears };
      }),
    dec: (payload) => set((state) => ({ bears: state.bears - payload })),
  };
};
