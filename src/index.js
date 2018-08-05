import { h, app } from 'hyperapp';
import actions from './actions/index.js';
import { loadData } from './services/data.js';
import ExpansionList from './components/ExpansionList.js';
// import GameDisplay from './components/GameDisplay.js';
import PlayerButtons from './components/PlayerButtons.js';
import Section from './components/Section.js';

const data = loadData();

const view = (state, actions) => {
  const goToSection2 = () => actions.setSection(2);

  return (
    <div>
      <h1>LEGENDARY Game Generator</h1>

      <Section current={state.section} section={0}>
        <h2>How Many Players?</h2>
        <PlayerButtons selectPlayers={actions.selectPlayers} />
      </Section>

      <Section current={state.section} section={1}>
        <h2>Which Expansions Do You Want To Use?</h2>
        <ExpansionList
          toggle={actions.toggleExpansion}
          expansions={state.expansions}
        />
        <button onclick={goToSection2}>Next</button>
      </Section>
    </div>
  );
};

app(data, actions, view, document.body);
