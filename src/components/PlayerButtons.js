import { h } from 'hyperapp';

const setPlayersFactory = actions => players =>
  actions.getInitialConfig(players);

const component = (state, actions) => {
  const setPlayers = setPlayersFactory(actions);
  return (
    <div>
      <button onclick={() => setPlayers(2)}>Two</button>
      <button onclick={() => setPlayers(3)}>Three</button>
      <button onclick={() => setPlayers(4)}>Four</button>
      <button onclick={() => setPlayers(5)}>Five</button>
    </div>
  );
};

export default component;
