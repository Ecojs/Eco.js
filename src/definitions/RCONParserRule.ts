import type ECO from '../ECO';

export default interface RCONParserRule<T> {
  regex: RegExp;
  format: (args: RegExpMatchArray| RegExpMatchArray[], controller: ECO)=> T | void;
  multiProperty?: string;
  matchAll?: boolean;
}
