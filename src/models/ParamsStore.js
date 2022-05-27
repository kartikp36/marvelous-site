import { types } from "mobx-state-tree";
import { createContext, useContext } from "react";

export const ParamsStore = types
  .model("ParamsStore", { 
    type: types.string,
    page: types.integer,
    chronology: types.optional(types.string,''),
    searchInput: types.maybeNull(types.string),
  })
  .actions((self) => {
    const updateSearchInput = (val) => {
      self.searchInput = val;
    };
    const updateChronology = (val) => {
      self.chronology = val;
    };
    const updatePage = () => {
      self.page = self.page + 1;
    };
    const updateType = (val) => {
      self.type = val;
    };
    return { updateSearchInput, updateChronology, updatePage, updateType };
  })
  .create({ searchInput: '', type: "movies", chronology: "ASC", page: 1 });

const RootStoreContext = createContext(ParamsStore);
export const { Provider } = RootStoreContext;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Root store is null, please add a context provider");
  }
  return store;
}

export default ParamsStore;
