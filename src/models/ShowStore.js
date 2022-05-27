import { isObservable, makeAutoObservable } from "mobx";
import { types, flow, onSnapshot } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { fetchShows } from "../services/services";
import { ParamsStore } from "./ParamsStore";

const Show = types.model("Show", {
  id: types.integer,
  title: types.string,
  release_date: types.maybeNull(types.string),
  overview: types.maybeNull(types.string),
  cover_url: types.maybeNull(types.string),
  trailer_url: types.maybeNull(types.string),
  directed_by: types.string,
  phase: types.maybeNull(types.integer),
  saga: types.maybeNull(types.string),
  imdb_id: types.string,
  post_credit_scenes: types.integer,
});

const ShowStore = types
  .model("ShowStore", {
    shows: types.array(Show),
  })
  .actions((self) => {
    const getShows = flow(function* () {
      const result = yield fetchShows(ParamsStore);

      if (ParamsStore.page > 1) {
        let res = [ ...self.shows,...result ];
        self.shows = res;
      } else {
        self.shows = result;
      }
      console.log(JSON.parse(JSON.stringify(self.shows)));
      return self.shows;
    });

    const updateShowStore = (newShows) => {
      self.shows = newShows;
    };
    return { getShows, updateShowStore };
  })
  .create({ shows: [] });

const RootStoreContext = createContext(ShowStore);
export const { Provider } = RootStoreContext;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Root store is null, please add a context provider");
  }
  return store;
}

export default ShowStore;
