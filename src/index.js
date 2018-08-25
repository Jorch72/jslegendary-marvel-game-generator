import { h, app } from 'hyperapp';
import actions from './actions/index.js';
import { loadData } from './services/data.js';
import ButtonList from './components/ButtonList.js';
import ExpansionList from './components/ExpansionList.js';
// import GameDisplay from './components/GameDisplay.js';
import MastermindSection from './components/MastermindSection.js';
import PlayerButtons from './components/PlayerButtons.js';
import Section from './components/Section.js';
import './styles.css';

const data = loadData();

const view = (state, actions) => {
  return (
    <div class="wrapper">
      <h1>LEGENDARY Game Generator</h1>

      <main
        style={{
          marginLeft: `${-(state.section * 100)}%`,
          transition: 'margin-left ease-in-out 600ms'
        }}
      >
        <Section>
          <h2>How Many Players?</h2>
          <PlayerButtons selectPlayers={actions.selectPlayers} />
        </Section>

        <Section>
          <h2>Which Expansions Do You Want To Use?</h2>
          <ExpansionList
            toggle={actions.toggleExpansion}
            expansions={state.expansions}
          />
          <ButtonList>
            <button onclick={() => actions.setSection(1)}>Back</button>
            <button onclick={() => actions.pickMastermind()}>Next</button>
          </ButtonList>
        </Section>

        <MastermindSection
          mastermind={state.game.get('mastermind') || {}}
          reroll={actions.pickMastermind}
          setSection={actions.setSection}
        />
      </main>
    </div>
  );
};

app(data, actions, view, document.body);
