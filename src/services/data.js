import { List } from 'immutable';
import rawData from '../data.json';
import Expansion from '../types/Expansion.js';

export const loadExpansionList = () => {
  return {
    expansions: List(
      rawData.expansions.map(
        expansion =>
          new Expansion({
            name: expansion
          })
      )
    )
  };
};
