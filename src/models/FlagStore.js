import { types } from "mobx-state-tree";
import { createContext, useContext } from "react";


export const FlagStore = types
  .model("FlagStore", {
    loadButton: types.boolean,
  })
  .actions((self) => {
    const toggleLoadButton = (val) => {
      self.loadButton = val;
    };
    return { toggleLoadButton };
  })
  .create({ loadButton: true });

const RootStoreContext = createContext(FlagStore);
export const { Provider } = RootStoreContext;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Root store is null, please add a context provider");
  }
  return store;
}

export default FlagStore;
