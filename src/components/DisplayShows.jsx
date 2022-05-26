import Card from "./Card";
import Shows from "../models/ShowList";
import { observer } from "mobx-react";
import { getSnapshot, onSnapshot } from "mobx-state-tree";
import { values } from "mobx";
const DisplayShows = () => {
  const { shows } = Shows;
  onSnapshot(shows, (snapshot) => console.log(snapshot));
  
  // console.log(values(shows));
  // shows.map((show) => {
  //   return <Card show={show} />;
  // });
  return <Card/>
};
export default observer(DisplayShows);
