import { LedgerTransport } from './ledgerTransport';
/**
 * Sets the instance of ledger transport (Node/U2F/IFrame).
 * @param t Ledger transport
 */
export declare function setLedgerTransport(transport: LedgerTransport): void;
/**
 * Detects if Ledger is installed, connected and NEO app is running.
 *
 */
export declare function isLedgerSupported(): Promise<boolean>;
/**
 * Retrieves the public key corresponding to BIP44 index.
 *
 * @param index Index of the public key
 */
export declare function getPublicKey(index: number, neo: boolean): Promise<string>;
/**
 * Computes ECDSA signature of the data from Ledger using index.
 *
 */
export declare function computesSignature(index: number, neo: boolean, data: string): Promise<string>;
