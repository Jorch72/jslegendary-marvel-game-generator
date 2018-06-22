import { getInitialConfig } from '../services/gen.js';

export const generateGame = () => (state, actions) => {
  actions.selectMastermind();
};

export const selectMastermind = () => state => {
  const enabledExpansions = state.expansions
    .filter(expansion => expansion.enabled)
    .map(expansion => expansion.name);

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
  selectMastermind,
  selectPlayers,
  toggleExpansion
};
