import { List, Map } from 'immutable';

export const getEnabledExpansions = expansions =>
  expansions
    .filter(expansion => expansion.enabled)
    .map(expansion => expansion.name);

export const filterByEnabledExpansions = (expansions, data) =>
  data.filter(({ set }) => expansions.some(expansion => set === expansion));

export const getInitialConfig = players => {
  switch (players) {
    case 2:
      return {
        game: Map({
          bystanders: 2,
          henchmen: List(),
          heroes: List(),
          villains: List()
        }),
        needed: Map({
          henchmen: 1,
          heroes: 5,
          villains: 2
        }),
        players: 2
      };
    case 3:
      return {
        game: Map({
          bystanders: 8,
          henchmen: List(),
          heroes: List(),
          villains: List()
        }),
        needed: Map({
          henchmen: 1,
          heroes: 5,
          villains: 3
        }),
        players: 3
      };
    case 4:
      return {
        game: Map({
          bystanders: 8,
          henchmen: List(),
          heroes: List(),
          villains: List()
        }),
        needed: Map({
          henchmen: 2,
          heroes: 5,
          villains: 3
        }),
        players: 4
      };
    case 5:
      return {
        game: Map({
          bystanders: 12,
          henchmen: List(),
          heroes: List(),
          villains: List()
        }),
        needed: Map({
          henchmen: 2,
          heroes: 6,
          villains: 4
        }),
        players: 5
      };
  }
};
