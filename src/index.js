import { h, app } from "hyperapp";

const view = () => <h1>Hello, World!</h1>;

app({}, {}, view, document.body);
