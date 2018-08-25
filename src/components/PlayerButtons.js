import { h } from 'hyperapp';
import ButtonList from './ButtonList.js';

const component = ({ selectPlayers }) => {
  return (
    <ButtonList>
      <button onclick={() => selectPlayers(2)}>Two</button>
      <button onclick={() => selectPlayers(3)}>Three</button>
      <button onclick={() => selectPlayers(4)}>Four</button>
      <button onclick={() => selectPlayers(5)}>Five</button>
    </ButtonList>
  );
};

export default component;
