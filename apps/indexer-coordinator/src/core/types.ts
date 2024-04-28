// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigNumber, ContractTransaction, Overrides } from 'ethers';

export enum DesiredStatus {
  STOPPED,
  RUNNING,
}

export enum IndexerDeploymentStatus {
  TERMINATED,
  READY,
}

export enum ServiceStatus {
  Starting = 'STARTING',
  Healthy = 'HEALTHY',
  UnHealthy = 'UNHEALTHY',
  NotStarted = 'NOT START',
  Terminated = 'TERMINATED',
}

export type TxFun = (overrides: Overrides) => Promise<ContractTransaction>;

export type GasFun = (overrides: Overrides) => Promise<BigNumber>;

export enum TxType {
  go = 'go',
  check = 'check',
  postponed = 'postponed',
}

export interface TxOptions {
  action: string;
  type: TxType;
  txFun: TxFun;
  gasFun?: GasFun;
  desc?: string;
}

export type Transaction = {
  name: string;
  txFun: TxFun;
  desc?: string;
};

export type PoiItem = {
  id: number;
  mmrRoot: string;
};

export type Poi = {
  blockHeight: number;
  mmrRoot: string;
};
