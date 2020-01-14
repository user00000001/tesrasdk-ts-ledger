import { Crypto } from 'tesrasdk-ts';
import PrivateKey = Crypto.PrivateKey;
import PublicKey = Crypto.PublicKey;
export interface LedgerKey extends PrivateKey {
    publicKey: PublicKey;
    index: number;
    neo: boolean;
    type: 'LEDGER';
}
export declare function create(index: number, neo: boolean): Promise<LedgerKey>;
export declare function createExisting(index: number, neo: boolean, pKey: string): LedgerKey;
