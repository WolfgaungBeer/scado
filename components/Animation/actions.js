import { ANIMATE, REMOVE } from './actionTypes';

const animate = payload => ({ type: ANIMATE, payload });
const remove = payload => ({ type: REMOVE, payload });

export default { animate, remove };
