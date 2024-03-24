export interface ActivePackageResponse {
  packageName: string;
  suggestedVersionCode: number;
  packages: Package[];
}

export interface AppSearchResponse {
  apps: App[];
}

export interface App {
  name: string;
  summary: string;
  icon: string;
  url: string;
}

export interface Package {
  versionName: string;
  versionCode: number;
}

export interface BuildStatusResponse {
  "/etc/issue.net": string;
  buildServer: BuildServer;
  commandLine: string[];
  endTimestamp: number;
  failedBuilds: [string, number][];
  fdroidData: FdroidData;
  fdroidServer: FdroidServer;
  guestVagrantVmCpus: string;
  guestVagrantVmMemory: string;
  hostOsCpuCount: number;
  hostProcMeminfoMemTotal: string;
  startTimestamp: number;
  subcommand: string;
  successfulBuildIds: [string, number][];
}

export interface BuildServer {
  commitId: string;
}

export interface FdroidData {
  commitId: string;
  isDirty: boolean;
  modifiedFiles: never[];
  untrackedFiles: never[];
}

export interface FdroidServer {
  commitId: string;
  isDirty: boolean;
  modifiedFiles: never[];
  untrackedFiles: never[];
}

export interface RunningStatusResponse {
  "/etc/issue.net": string;
  commandLine: string[];
  failedBuilds: [string, number][];
  fdroidData: FdroidData;
  fdroidServer: FdroidServer;
  startTimestamp: number;
  subcommand: string;
  successfulBuildIds: [string, number][];
}

export interface UpdateStatusResponse {
  "/etc/issue.net": string;
  antiFeatures: AntiFeatures;
  apksigner: string;
  archivePolicy0: string[];
  commandLine: string[];
  disabled: string[];
  endTimestamp: number;
  failedBuilds: FailedBuilds;
  fdroidData: FdroidData;
  fdroidServer: FdroidServer;
  jarsigner: string;
  keytool: string;
  needsUpdate: string[];
  noPackages: string[];
  noUpdateCheck: string[];
  startTimestamp: number;
  subcommand: string;
}

export interface DeployStatusResponse {
  "/etc/issue.net": string;
  commandLine: string[];
  endTimestamp: number;
  fdroidData: FdroidData;
  fdroidServer: FdroidServer;
  startTimestamp: number;
  subcommand: string;
}

export interface AntiFeatures {
  Ads: Ads;
  KnownVuln: KnownVuln;
  NSFW: Nsfw;
  NoSourceSince: NoSourceSince;
  NonFreeAdd: NonFreeAdd;
  NonFreeAssets: NonFreeAssets;
  NonFreeDep: NonFreeDep;
  NonFreeNet: NonFreeNet;
  Tracking: Tracking;
  UpstreamNonFree: UpstreamNonFree;
}

export interface Ads {
  apps: string[];
}

export interface KnownVuln {
  apps: string[];
}

export interface Nsfw {
  apps: string[];
}

export interface NoSourceSince {
  apps: string[];
}

export interface NonFreeAdd {
  apps: string[];
}

export interface NonFreeAssets {
  apps: string[];
}

export interface NonFreeDep {
  apps: string[];
}

export interface NonFreeNet {
  apps: string[];
}

export interface Tracking {
  apps: string[];
}

export interface UpstreamNonFree {
  apps: string[];
}

export interface FailedBuilds {
  [key: string]: number[];
}
