import CharCard from "../CharCard"
import './index.css'
 
const Characters = ({ list }) => {

  return (
    <div className="my-characters">
      <h3>Meus personagens</h3>
      <ul>
        {list.map(character =>
          <li key={character.id}>
            <CharCard
              name={character.name}
              status={character.status}
              image={character.image} />
          </li>
        )}

      </ul>

    </div>
  );
}

export default Characters;