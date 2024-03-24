import axios from "axios";
import { constants } from "./constants";
import {
  ActivePackageResponse,
  AppSearchResponse,
  BuildStatusResponse,
  DeployStatusResponse,
  RunningStatusResponse,
  UpdateStatusResponse,
} from "./model/fdroid-model";

export namespace Fdroid {
  const _axios = axios.create({
    baseURL: constants.baseURL,
    timeout: 3000,
  });
  export async function getPackageByName(name: string) {
    const { data } = await _axios.get<ActivePackageResponse>(
      `/api/v1/packages/${name}`,
    );
    return data;
  }
  export async function searchAppsByName(name: string) {
    const { data } = await _axios<AppSearchResponse>({
      baseURL: constants.baseSearchURL,
      url: `/api/search_apps?q=${name}`,
      method: "GET",
    });
    return data;
  }
  export async function getBuildStatus() {
    const { data } = await _axios.get<BuildStatusResponse>(
      "/repo/status/build.json",
    );
    return data;
  }

  export async function getUpdateStatus() {
    const { data } = await _axios.get<UpdateStatusResponse>(
      "/repo/status/update.json",
    );
    return data;
  }

  export async function getDeployStatus() {
    const { data } = await _axios.get<DeployStatusResponse>(
      "/repo/status/deploy.json",
    );
    return data;
  }
  export async function getRunningStatus() {
    const { data } = await _axios.get<RunningStatusResponse>(
      "/repo/status/running.json",
    );
    return data;
  }
}
