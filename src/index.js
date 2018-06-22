import { h, app } from 'hyperapp';
import { Map } from 'immutable';
import actions from './actions/index.js';
import { loadData } from './services/data.js';
import ExpansionList from './components/ExpansionList.js';
import PlayerButtons from './components/PlayerButtons.js';

const data = loadData();

const view = (state, actions) => (
  <div>
    <h1>LEGENDARY Game Generator</h1>
    <button onclick={() => console.log(state)}>Log State</button>
    <button onclick={() => console.log(actions)}>Log Actions</button>
    <h2>Choose Number of Players:</h2>
    <PlayerButtons selectPlayers={actions.selectPlayers} />
    <ExpansionList
      expansions={state.expansions}
      toggle={actions.toggleExpansion}
    />
    <button onclick={actions.generateGame}>Generate Game</button>
  </div>
);

app(
  {
    bystanders: 0,
    game: Map(),
    ...data
  },
  actions,
  view,
  document.body
);
