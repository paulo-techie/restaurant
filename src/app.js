import { loadPage } from './loaders.js';
import { navActions } from './operations.js';

export function init() {
  loadPage();
  navActions();
}
