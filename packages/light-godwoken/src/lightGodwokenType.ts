import { Address, Cell, Hash, HexNumber, Transaction, helpers, Script, BI, HexString } from "@ckb-lumos/lumos";
import EventEmitter from "events";
import { GodwokenVersion, LightGodwokenConfig } from "./constants/configTypes";

export interface GetL2CkbBalancePayload {
  l2Address?: string;
}

export interface GetL1CkbBalancePayload {
  l1Address?: string;
}
export interface Token {
  name: string;
  symbol: string;
  decimals: number;
  tokenURI: string;
}
export interface UniversalToken extends Token {
  /**
   * Universal Asset Notation
   * @see https://github.com/nervosnetwork/rfcs/blob/a092218b8f3ba9b6616ff41bd56a5a75d42efaf7/rfcs/0000-universal-asset-notation/0000-universal-asset-notation.md
   **/
  uan: string;
}

interface ERC20 extends UniversalToken {
  address: string;
}
export interface ProxyERC20 extends ERC20 {
  sudt_script_hash: Hash;
  id?: number;
}
export interface SUDT extends UniversalToken {
  type: Script;
}

export interface GetErc20BalancesResult {
  balances: HexNumber[];
}

export interface GetSudtBalancesResult {
  balances: HexNumber[];
}

export interface GetErc20Balances {
  addresses: string[];
}

export interface GetSudtBalances {
  types: Script[];
}

export interface GetSudtBalance {
  type: Script;
}

export interface GodwokenNetworkConfig {
  testnetV1: "https://godwoken-testnet-web3-v1-rpc.ckbapp.dev";
}

interface WithdrawListener {
  (event: "sent", listener: (txHash: Hash) => void): void;
  (event: "pending", listener: (txHash: Hash) => void): void;
  (event: "success", listener: (txHash: Hash) => void): void;
  (event: "fail", listener: (e: Error) => void): void;
}

interface DepositListener {
  (event: "sent", listener: (txHash: Hash) => void): void;
  (event: "pending", listener: (txHash: Hash) => void): void;
  (event: "success", listener: (txHash: Hash) => void): void;
  (event: "fail", listener: (e: Error) => void): void;
}

export interface WithdrawalEventEmitter {
  on: WithdrawListener;
  removeAllListeners(event?: string | symbol): this;
  emit: (event: "sent" | "pending" | "success" | "fail", payload: any) => void;
}

export interface DepositEventEmitter {
  on: DepositListener;
  removeAllListeners(event?: string | symbol): this;
  emit: (event: "sent" | "pending" | "success" | "fail", payload: any) => void;
}

export interface BaseWithdrawalEventEmitterPayload {
  // CKB capacity
  capacity: HexNumber;
  // L1 mapped sUDT amount
  amount: HexNumber;
  /**
   * {@link L1MappedErc20}
   */
  sudt_script_hash: Hash;
}
export interface WithdrawalEventEmitterPayload extends BaseWithdrawalEventEmitterPayload {
  /**
   * withdraw to L1 address
   */
  withdrawal_address?: Address;
}

export interface WithdrawBase {
  withdrawalBlockNumber: number;
  remainingBlockNumber: number;
  capacity: HexNumber;
  amount: HexNumber;
  sudt_script_hash: Hash;
  erc20?: ProxyERC20;
}

export interface WithdrawResultWithCell extends WithdrawBase {
  cell: Cell;
}
export interface WithdrawResultV1 extends WithdrawBase {
  layer1TxHash: HexString;
  status: "pending" | "success" | "failed";
}
export interface WithdrawResultV0 extends WithdrawBase {
  layer1TxHash: HexString;
  isFastWithdrawal: boolean;
  status: "pending" | "success" | "failed";
}

export interface UnlockPayload {
  cell: Cell;
}

export interface DepositPayload {
  capacity: HexNumber;
  amount?: HexNumber;
  sudtType?: Script;
}

export interface PendingDepositTransaction {
  tx_hash: Hash;
}

type Promisable<T> = Promise<T> | T;

export const SUDT_CELL_CAPACITY = 144_00000000;

export interface LightGodwokenProvider {
  claimUSDC(): Promise<HexString>;

  getL2Address(): Promisable<string>;

  getConfig(): LightGodwokenConfig;

  getL1Address(): Promisable<string>;

  getMinFeeRate(): Promise<BI>;

  signL1TxSkeleton: (tx: helpers.TransactionSkeletonType) => Promise<Transaction>;

  signL1Tx: (tx: Transaction) => Promise<Transaction>;

  // now only supported omni lock, the other lock type will be supported later
  sendL1Transaction: (tx: Transaction) => Promise<Hash>;
}

export type DepositRequest = {
  blockNumber: BI;
  capacity: BI;
  amount: BI;
  sudt?: SUDT;
  cancelTime: BI;
  rawCell: Cell;
};

export interface LightGodwokenBase {
  provider: LightGodwokenProvider;

  getMinimalDepositCapacity(): BI;

  getMinimalWithdrawalCapacity(): BI;

  cancelDeposit(depositTxHash: string, cancelTimeout: number): Promise<HexString>;

  getCkbBlockProduceTime(): Promisable<number>;

  getDepositList(): Promise<DepositRequest[]>;

  getCkbCurrentBlockNumber(): Promise<BI>;

  getConfig(): LightGodwokenConfig;

  claimUSDC(): Promise<HexString>;

  getVersion: () => GodwokenVersion;

  getNativeAsset: () => UniversalToken;

  getChainId: () => Promise<HexNumber> | HexNumber;

  /**
   * get producing 1 block time
   */
  getBlockProduceTime: () => Promise<number> | number;

  getWithdrawalWaitBlock: () => Promise<number> | number;

  // listWithdraw: () => Promise<WithdrawResultWithCell[]>;

  generateDepositLock: () => Script;

  deposit: (payload: DepositPayload, eventEmitter: EventEmitter) => Promise<Hash>;

  depositWithEvent: (payload: DepositPayload) => DepositEventEmitter;

  subscribPendingDepositTransactions: (payload: PendingDepositTransaction[]) => DepositEventEmitter;

  withdrawWithEvent: (payload: WithdrawalEventEmitterPayload) => WithdrawalEventEmitter;

  getL2CkbBalance: (payload?: GetL2CkbBalancePayload) => Promise<HexNumber>;

  getL1CkbBalance: (payload?: GetL1CkbBalancePayload) => Promise<HexNumber>;

  getBuiltinErc20List: () => ProxyERC20[];

  getBuiltinSUDTList: () => SUDT[];

  getErc20Balances: (payload: GetErc20Balances) => Promise<GetErc20BalancesResult>;

  getSudtBalances: (payload: GetSudtBalances) => Promise<GetSudtBalancesResult>;
}

export interface LightGodwokenV0 extends LightGodwokenBase {
  getMinimalWithdrawalToV1Capacity(): BI;
  // unlock: (payload: UnlockPayload) => Promise<Hash>;
  withdrawToV1WithEvent: (payload: BaseWithdrawalEventEmitterPayload) => WithdrawalEventEmitter;
}
export interface LightGodwokenV1 extends LightGodwokenBase {}
