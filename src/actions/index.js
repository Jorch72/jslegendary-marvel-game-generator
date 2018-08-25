import {
  filterByEnabledExpansions,
  getEnabledExpansions,
  getInitialConfig
} from '../services/gen.js';

export const addHenchmen = hm => state => {
  const game = state.game.update('henchmen', henchmen => henchmen.push(hm));
  return { game };
};

export const addHero = hero => state => {
  const game = state.game.update('heroes', heroes => heroes.push(hero));
  return { game };
};

export const addVillain = villain => state => {
  const game = state.game.update('villains', villains =>
    villains.push(villain)
  );
  return { game };
};

export const decrementNeeded = type => state => ({
  needed: state.needed.update(type, t => t - 1)
});

export const generateGame = () => (state, actions) => {
  actions.reset(state.players);
  actions.pickMastermind();
  actions.pickScheme();
  actions.pickVillains();
  actions.pickHenchmenGroups();

  for (let i = 0; i < state.needed.get('heroes'); i++) {
    actions.pickHero();
  }

  actions.showResults();
};

export const pickHenchmen = () => (state, actions) => {
  const enabledExpansions = getEnabledExpansions(state.expansions);
  const possibleHenchmen = filterByEnabledExpansions(
    enabledExpansions,
    state.henchmen
  );
  const randomIndex = Math.floor(Math.random() * possibleHenchmen.size);
  const selectedHenchmen = possibleHenchmen.get(randomIndex);

  const found = state.game
    .get('henchmen')
    .find(henchmen => henchmen.name === selectedHenchmen.name);

  if (found) {
    actions.pickHenchmen();
    return;
  }

  actions.addHenchmen(selectedHenchmen);
};

export const pickHenchmenGroups = () => (state, actions) => {
  for (let i = 0; i < state.needed.get('henchmen'); i++) {
    actions.pickHenchmen();
  }
};

export const pickHero = () => (state, actions) => {
  const enabledExpansions = getEnabledExpansions(state.expansions);
  const possibleHeroes = filterByEnabledExpansions(
    enabledExpansions,
    state.heroes
  );
  const randomIndex = Math.floor(Math.random() * possibleHeroes.size);
  const selectedHero = possibleHeroes.get(randomIndex);

  const found = state.game
    .get('heroes')
    .find(hero => hero.name === selectedHero.name);

  if (found) {
    actions.pickHero();
    return;
  }

  actions.addHero(selectedHero);
};

export const pickMastermind = () => (state, actions) => {
  const enabledExpansions = getEnabledExpansions(state.expansions);
  const possibleMasterminds = filterByEnabledExpansions(
    enabledExpansions,
    state.masterminds
  );
  const randomIndex = Math.floor(Math.random() * possibleMasterminds.size);
  const selectedMastermind = possibleMasterminds.get(randomIndex);

  if (selectedMastermind.villains) {
    const villain = state.villains
      .toJS()
      .find(villain => villain.name === selectedMastermind.villains);
    actions.addVillain(villain);
    actions.decrementNeeded('villains');
  }

  if (selectedMastermind.henchmen) {
    const henchmen = state.henchmen
      .toJS()
      .find(henchmen => henchmen.name === selectedMastermind.henchmen);
    actions.addHenchmen(henchmen);
    actions.decrementNeeded('henchmen');
  }

  actions.setMastermind(selectedMastermind);
};

export const pickScheme = () => state => {
  const enabledExpansions = getEnabledExpansions(state.expansions);
  const possibleSchemes = filterByEnabledExpansions(
    enabledExpansions,
    state.schemes
  );
  const randomIndex = Math.floor(Math.random() * possibleSchemes.size);
  const selectedScheme = possibleSchemes.get(randomIndex);

  return {
    game: state.game.set('scheme', selectedScheme)
  };
};

export const pickVillain = () => (state, actions) => {
  const enabledExpansions = getEnabledExpansions(state.expansions);
  const possibleVillains = filterByEnabledExpansions(
    enabledExpansions,
    state.villains
  );
  const randomIndex = Math.floor(Math.random() * possibleVillains.size);
  const selectedVillain = possibleVillains.get(randomIndex);

  const foundVillain = state.game
    .get('villains')
    .find(villain => villain.name === selectedVillain.name);

  if (foundVillain) {
    actions.pickVillain();
    return;
  }

  actions.addVillain(selectedVillain);
};

export const pickVillains = () => (state, actions) => {
  for (let i = 0; i < state.needed.get('villains'); i++) {
    actions.pickVillain();
  }
};

export const reset = getInitialConfig;

export const selectPlayers = players => {
  const state = getInitialConfig(players);
  state.showResults = false;
  state.section = 1;
  return state;
};

export const setMastermind = mastermind => state => ({
  game: state.game.set('mastermind', mastermind),
  section: 2
});

export const setSection = section => state => ({
  section: section
});

export const showResults = () => ({
  showResults: true
});

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
  addHenchmen,
  addHero,
  addVillain,
  decrementNeeded,
  generateGame,
  pickHenchmen,
  pickHenchmenGroups,
  pickHero,
  pickMastermind,
  pickScheme,
  pickVillain,
  pickVillains,
  reset,
  selectPlayers,
  setMastermind,
  setSection,
  showResults,
  toggleExpansion
};
