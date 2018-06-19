export const getInitialConfig = players => {
  switch (players) {
    case 2:
      return {
        bystanders: 2,
        needed: {
          henchmen: 1,
          heroes: 5,
          villains: 2
        }
      };
    case 3:
      return {
        bystanders: 8,
        needed: {
          henchmen: 1,
          heroes: 5,
          villains: 3
        }
      };
    case 4:
      return {
        bystanders: 8,
        needed: {
          henchmen: 2,
          heroes: 5,
          villains: 3
        }
      };
    case 5:
      return {
        bystanders: 12,
        needed: {
          henchmen: 2,
          heroes: 6,
          villains: 4
        }
      };
  }
};
