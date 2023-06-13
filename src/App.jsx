import './App.css';
import { people } from './data.js';

export default function List() {

  const personList = people.map(person => 
    <li key={person.id}>
      <img
        src={person.imageUrl}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )

  return (
    <ul>{personList}</ul>
  );
}
