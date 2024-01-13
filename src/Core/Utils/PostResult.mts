import { Result, type IResult } from './Result.mjs';

export interface IPostResult extends IResult {
  PostEffects: string[];
}

export class PostResult extends Result {
  public PostEffects: string[];
  constructor($b: IPostResult = {} as IPostResult) {
    super($b);
    this.PostEffects = $b.PostEffects;
  }
}
