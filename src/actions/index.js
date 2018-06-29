import { filterByEnabledExpansions, getEnabledExpansions, getInitialConfig } from '../services/gen.js';

export const addVillain = name => state => {
  const game = state.game.update('villains', villains => villains.push(name));
  const needed = state.needed.update('villains', num => num - 1);
  return { game, needed };
};

export const generateGame = () => (state, actions) => {
  actions.pickMastermind();
  actions.pickScheme();

  for (let i = state.needed.get('villains'); i > 0; i--) {
    actions.pickVillain();
  }
};

export const pickMastermind = () => state => {
  const enabledExpansions = getEnabledExpansions(state.expansions);
  const possibleMasterminds = filterByEnabledExpansions(enabledExpansions, state.masterminds);
  const randomIndex = Math.floor(Math.random() * possibleMasterminds.size);
  const selectedMastermind = possibleMasterminds.get(randomIndex);

  return {
    game: state.game.set('mastermind', selectedMastermind)
  };
};

export const pickScheme = () => state => {
  const enabledExpansions = getEnabledExpansions(state.expansions);
  const possibleSchemes = filterByEnabledExpansions(enabledExpansions, state.schemes);
  const randomIndex = Math.floor(Math.random() * possibleSchemes.size);
  const selectedScheme = possibleSchemes.get(randomIndex);

  return {
    game: state.game.set('scheme', selectedScheme)
  };
};

export const pickVillain = () => (state, actions) => {
  const enabledExpansions = getEnabledExpansions(state.expansions);
  const possibleVillains = filterByEnabledExpansions(enabledExpansions, state.villains);
  const randomIndex = Math.floor(Math.random() * possibleVillains.size);
  const selectedVillain = possibleVillains.get(randomIndex);

  const foundVillain = state.game.get('villains')
    .find(villain => villain.name === selectedVillain.name);

  if (foundVillain) {
    actions.pickVillain();
    return;
  }

  actions.addVillain(selectedVillain);
};

export const selectPlayers = getInitialConfig;

export const toggleExpansion = name => state => {
  const findExpansion = expansion => expansion.name === name;
  const index = state.expansions.findIndex(findExpansion);
  const oldExpansion = state.expansions.get(index);
  const updatedExpansion = oldExpansion.set(
    'enabled',
    !oldExpansion.get('enabled')
  );
  const updatedExpansions = state.expansions.set(index, updatedExpansion);
  return {
    expansions: updatedExpansions
  };
};

export default {
  addVillain,
  generateGame,
  pickMastermind,
  pickScheme,
  pickVillain,
  selectPlayers,
  toggleExpansion
};
