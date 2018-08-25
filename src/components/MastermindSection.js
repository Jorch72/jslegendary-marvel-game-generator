import { h } from 'hyperapp';
import ButtonList from './ButtonList.js';
import Section from './Section.js';

const component = ({ mastermind, reroll, setSection }) => (
  <Section>
    <h2>Select A Mastermind</h2>
    <h3>{mastermind.name}</h3>
    <h4>Always Leads {mastermind.villains || mastermind.henchmen}</h4>
    <ButtonList>
      <button onclick={() => setSection(2)}>Back</button>
      <button onclick={reroll}>Reroll</button>
      <button onclick={() => setSection(3)}>Next</button>
    </ButtonList>
  </Section>
);

export default component;
