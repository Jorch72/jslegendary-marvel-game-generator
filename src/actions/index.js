import { getEnabledExpansions, getInitialConfig } from '../services/gen.js';

export const generateGame = () => (state, actions) => {
  actions.selectMastermind();
  actions.pickScheme();
};

export const pickScheme = () => state => {
  const enabledExpansions = getEnabledExpansions(state.expansions);

  const possibleSchemes = state.schemes.filter(scheme =>
    enabledExpansions.some(expansion => scheme.set === expansion)
  );

  const randomIndex = Math.floor(Math.random() * possibleSchemes.size);
  const selectedScheme = possibleSchemes.get(randomIndex);

  return {
    game: state.game.set('scheme', selectedScheme)
  };
};

export const selectMastermind = () => state => {
  const enabledExpansions = getEnabledExpansions(state.expansions);

  const possibleMasterminds = state.masterminds.filter(mastermind =>
    enabledExpansions.some(expansion => mastermind.set === expansion)
  );

  const randomIndex = Math.floor(Math.random() * possibleMasterminds.size);
  const selectedMastermind = possibleMasterminds.get(randomIndex);

  return {
    game: state.game.set('mastermind', selectedMastermind)
  };
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
  generateGame,
  pickScheme,
  selectMastermind,
  selectPlayers,
  toggleExpansion
};
