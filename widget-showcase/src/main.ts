import renderer, { w } from '@dojo/framework/core/vdom';
import App from './App';
import '@dojo/themes/dojo/index.css';
import '@dojo/themes/material/index.css';

const r = renderer(() => w(App, {}));
r.mount();
