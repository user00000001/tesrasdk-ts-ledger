import { LedgerTransport, SendParams } from './ledgerTransport';
/**
 * Standard implementation of Ledger transport using Node.JS HID.
 *
 * Usable in Node.JS or Electron environment.
 */
export declare class LedgerTransportNode implements LedgerTransport {
    private delegate;
    /**
     * Connects to the Ledger HW and creates transport.
     *
     * Caution: Transport needs to be close before creating new one.
     * Otherwise the new one might fail.
     */
    open(): Promise<void>;
    /**
     * Closes the transport connection to the Ledger HW.
     */
    close(): Promise<void>;
    /**
     * Sends data with params to the Ledger HW.
     *
     * @param params Send Params
     * @param msg - Hex encoded data
     * @param statusList List of valid status codes
     * @return Hex encoded result from Ledger
     */
    send(params: SendParams, data: string, statusList: number[]): Promise<string>;
}
