import { h } from 'hyperapp';

const component = ({ game }) => {
  return (
    <section>
      <h2>Game Setup</h2>

      <h3>Mastermind</h3>
      <p>{game.mastermind.name}</p>

      <h3>Scheme</h3>
      <p>{game.scheme.name}</p>

      <h3>Villains</h3>
      <ul>
        {game.villains.map(villain => (<li>{villain.name}</li>))}
      </ul>

      <h3>Henchmen</h3>
      <ul>
        {game.henchmen.map(henchmen => (<li>{henchmen.name}</li>))}
      </ul>

      <h3>Heroes</h3>
      <ul>
        {game.heroes.map(hero => (<li>{hero.name}</li>))}
      </ul>
    </section>
  );
};

export default component;
