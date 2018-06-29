import { List } from 'immutable';
import rawData from '../data.json';
import Expansion from '../types/Expansion.js';
import Mastermind from '../types/Mastermind.js';
import Scheme from '../types/Scheme.js';
import Villain from '../types/Villain.js';

export const loadData = () => {
  return {
    expansions: List(
      rawData.expansions.map(
        expansion =>
          new Expansion({
            name: expansion
          })
      )
    ),
    masterminds: List(
      rawData.masterminds.map(mastermind => Mastermind(mastermind))
    ),
    schemes: List(rawData.schemes.map(scheme => Scheme(scheme))),
    villains: List(rawData.villains.map(villain => Villain(villain)))
  };
};
