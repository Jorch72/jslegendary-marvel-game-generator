import { h, app } from 'hyperapp';
import { getInitialConfig } from './services/gen.js';

const actions = {
  getInitialConfig: getInitialConfig
};

const view = (state, actions) => (<div>
  <h1>LEGENDARY Game Generator</h1>
  <div>
    <button onclick={() => actions.getInitialConfig(2)}>Two</button>
    <button onclick={() => actions.getInitialConfig(3)}>Three</button>
    <button onclick={() => actions.getInitialConfig(4)}>Four</button>
    <button onclick={() => actions.getInitialConfig(5)}>Five</button>
  </div>
</div>);

app({ bystanders: 0 }, actions, view, document.body);
