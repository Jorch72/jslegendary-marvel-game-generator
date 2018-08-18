import { h } from 'hyperapp';

const component = ({ selectPlayers }) => {
  return (
    <div class="player-buttons">
      <button onclick={() => selectPlayers(2)}>Two</button>
      <button onclick={() => selectPlayers(3)}>Three</button>
      <button onclick={() => selectPlayers(4)}>Four</button>
      <button onclick={() => selectPlayers(5)}>Five</button>
    </div>
  );
};

export default component;
