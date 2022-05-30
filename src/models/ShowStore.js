import { types, flow } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { fetchShows } from "../services/services";
import { ParamsStore } from "./ParamsStore";
import { FlagStore } from './FlagStore';

const Show = types.model("Show", {
  id: types.integer,
  title: types.optional(types.string, "NA"),
  release_date: types.optional(types.maybeNull(types.string), "NA"),
  overview: types.optional(types.maybeNull(types.string), "NA"),
  cover_url: types.optional(types.maybeNull(types.string), "NA"),
  trailer_url: types.optional(
    types.maybeNull(types.string),
    "https://www.youtube.com/channel/UCvC4D8onUfXzvjTOM-dBfEA"
  ),
  directed_by: types.optional(types.string, "NA"),
  phase: types.optional(types.maybeNull(types.integer), 0),
  saga: types.optional(types.maybeNull(types.string), "NA"),
  imdb_id: types.optional(types.string, "?companies=co0051941"),
  post_credit_scenes: types.optional(types.integer, 0),
  number_seasons: types.optional(types.integer, 0),
  number_episodes: types.optional(types.integer, 0),
});

const ShowStore = types
  .model("ShowStore", {
    shows: types.array(Show),
  })
  .actions((self) => {
    const getShows = flow(function* () {
      const result = yield fetchShows(ParamsStore);
      if(result.length < 6){
        FlagStore.toggleLoadButton(false);
      }else{
        FlagStore.toggleLoadButton(true);
      }
      if (ParamsStore.page > 1) {
        let res = [...self.shows, ...result];
        self.shows = res;
      } else {
        self.shows = result;
      }
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
