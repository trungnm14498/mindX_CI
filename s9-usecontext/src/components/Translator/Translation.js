import { createContext } from 'react';
import Translator from './Translator.json';

const translatorContext = createContext(Translator);

export { translatorContext };