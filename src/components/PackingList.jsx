import Item from './Item'

export default function PackingList() {

  const packingList = [
    'Space suit',
    'Helmet with a golden leaf',
    'Photo of Tam',
  ];

  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item name={packingList[0]} isPacked={true} />
        <Item name={packingList[1]} isPacked={false} />
        <Item name={packingList[2]} isPacked={true} />
      </ul>
    </section>
  );
}