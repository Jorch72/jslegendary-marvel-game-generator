import { h, app } from 'hyperapp';
import actions from './actions/index.js';
import { loadData } from './services/data.js';
import ExpansionList from './components/ExpansionList.js';
import GameDisplay from './components/GameDisplay.js';
import PlayerButtons from './components/PlayerButtons.js';
import H1 from './components/styles/Title.js';

const data = loadData();

const view = (state, actions) => (
  <div>
    <H1>LEGENDARY Game Generator</H1>

    <h2>Choose Number of Players:</h2>
    <PlayerButtons selectPlayers={actions.selectPlayers} />
    <ExpansionList
      expansions={state.expansions}
      toggle={actions.toggleExpansion}
    />
    <button onclick={actions.generateGame}>Generate Game</button>

    {state.showResults && <GameDisplay game={state.game.toJS()} />}
  </div>
);

app(data, actions, view, document.body);
