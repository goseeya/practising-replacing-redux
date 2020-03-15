import { useState, useEffect } from 'react'; //to force rerendering

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1]; // only the secont value, the updating function

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalStste, payload):
    globalState = {...globalState, ...newState};

    for (const listener of listeners) {
      listener(globalState):
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      liteners = listeners.filter(li => li !== setState);
    }
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions { ...actions, ...userActions };
};
