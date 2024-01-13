import { ResultType } from './ResultType.mjs';

export interface IResult {
  Value: ResultType;
  Success: boolean;
  Failed: boolean;
  Message: string;
}

export class Result {
  public Value: ResultType;
  public Success: boolean;
  public Failed: boolean;
  public Message: string;
  constructor($b: IResult = {} as IResult) {
    this.Value = $b.Value;
    this.Success = $b.Success;
    this.Failed = $b.Failed;
    this.Message = $b.Message;
  }
  toString() {
    return this.Success ? 'Succeeded!' : `Failed: ${this.Message}`;
  }
}
