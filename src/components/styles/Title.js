import { h } from 'hyperapp';
import { css } from 'emotion';

const style = css`
  font-family: Helvetica, sans-serif;
`;

export default (props, children) => <h1 className={style}>{children}</h1>;
