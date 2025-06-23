import { loremIpsum } from "lorem-ipsum";
import { List } from "react-virtualized";
import ListItem from "./components/ListItem";

export default function App() {
  const rowCount = 50000;
  const containerWidth = 1900;
  const containerHeight = 850;
  const rowHeight = 90;

  const list = Array(rowCount)
    .fill()
    .map((val, index) => {
      return {
        id: index,
        name: "Sumit Saha",
        image: "https://placehold.co/40",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
      };
    });

  function rowRenderer({ key, index, style }) {
    return (
      <ListItem
        key={key}
        name={list[index].name}
        text={list[index].text}
        image={list[index].image}
        style={style}
      />
    );
  }

  return (
    <section>
      <List
        height={containerHeight}
        width={containerWidth}
        rowCount={rowCount}
        rowHeight={rowHeight}
        rowRenderer={rowRenderer}
      />
    </section>
  );
}
