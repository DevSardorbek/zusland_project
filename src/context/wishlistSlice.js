export const wishlist = (set) => {
  return {
    value: JSON.parse(localStorage.getItem("wishlist")) || [],
    toggleHeart: (payload) =>
      set((state) => {
        const index = state.value.findIndex((el) => el.id === payload.id);
        if (index < 0) {
          state.value = [...state.value, payload];
        } else {
          state.value = state.value.filter((el) => el.id !== payload.id);
        }
        localStorage.setItem("wishlist", JSON.stringify(state.value));
        return state.value;
      }),
  };
};
