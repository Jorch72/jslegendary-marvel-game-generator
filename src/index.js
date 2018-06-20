import { h, app } from 'hyperapp';
import { toggleExpansion } from './actions/index.js';
import { getInitialConfig } from './services/gen.js';
import { loadExpansionList } from './services/data.js';
import ExpansionList from './components/ExpansionList.js';
import PlayerButtons from './components/PlayerButtons.js';

const actions = {
  getInitialConfig: getInitialConfig,
  toggleExpansion
};

const expansions = loadExpansionList();

const view = (state, actions) => (
  <div>
    <h1>LEGENDARY Game Generator</h1>
    <h2>Choose Number of Players:</h2>
    <PlayerButtons />
    <ExpansionList
      expansions={state.expansions}
      toggle={actions.toggleExpansion}
    />
    <button onclick={() => console.log(state)}>Log State</button>
  </div>
);

app(
  {
    bystanders: 0,
    ...expansions
  },
  actions,
  view,
  document.body
);
