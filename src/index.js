import { h, app } from 'hyperapp';
import { getInitialConfig } from './services/gen.js';
import PlayerButtons from './components/PlayerButtons.js';

const actions = {
  getInitialConfig: getInitialConfig
};

const view = (state, actions) => (
  <div>
    <h1>LEGENDARY Game Generator</h1>
    <h2>Choose Number of Players:</h2>
    <PlayerButtons />
  </div>
);

app({ bystanders: 0 }, actions, view, document.body);
