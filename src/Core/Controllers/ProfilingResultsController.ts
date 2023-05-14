import {
  IProfilingResult,
  ProfilingResult,
} from '../../structures/Eco/Web/Core/DataTransferObjects/V1/ProfilingResult';
import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';

export class ProfilingResultsController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }

  public async getProfilingResults() {
    return this.GET<ProfilingResult[], IProfilingResult[]>(
      `/api/v1/profiling-results`,
      (client, results) =>
        results.map((result) => new ProfilingResult(client, result))
    );
  }

  public async getProfile(filename: string) {
    return this.GET<any, any>(`/api/v1/profiling-results/${filename}`);
  }
}
