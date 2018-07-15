import { h } from 'hyperapp';

const component = ({ current, section }, children) => {
  return (
    <section>
      {current === section && children}
    </section>
  );
};

export default component;
