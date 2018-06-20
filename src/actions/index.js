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
