import { h } from 'hyperapp';

const component = ({ expansions, toggle }) => {
  const toggleOnClick = expansion => () => toggle(expansion);
  return (
    <ul>
      {expansions.toJS().map(({ enabled, name }) => (
        <li key={name}>
          <input
            type="checkbox"
            checked={enabled}
            onclick={toggleOnClick(name)}
          />
          <label>{name}</label>
        </li>
      ))}
    </ul>
  );
};

export default component;
