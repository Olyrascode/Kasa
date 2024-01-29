
import Card from "./Card";
import data from './logements.json';

function Thumbnail() {
  return (
    <div className="thumbnail">
      {data.map((item) => (
        <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
  );
}

export default Thumbnail;
