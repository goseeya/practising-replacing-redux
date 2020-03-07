import { useState, useEffect } from 'react'; //to force rerendering

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
  const setState = useState(globalState)[1]; // only the secont value, the updating function

  useEffect(() => {
    listeners.push(setState);

    return () => {
      liteners = listeners.filter(li => li !== setState);
    }
  }, [setState]);
};
