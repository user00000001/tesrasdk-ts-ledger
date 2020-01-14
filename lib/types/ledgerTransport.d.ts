/**
 * Low level interface to Ledger HW TST application.
 */
export interface LedgerTransport {
    /**
     * Connects to the Ledger HW and creates transport.
     *
     * Caution: Transport needs to be close before creating new one.
     * Otherwise the new one might fail.
     */
    open: () => Promise<void>;
    /**
     * Closes the transport connection to the Ledger HW.
     */
    close: () => Promise<void>;
    /**
     * Sends data with params to the Ledger HW.
     *
     * @param params Send Params
     * @param msg - Hex encoded data
     * @param statusList List of valid status codes
     * @return Hex encoded result from Ledger
     */
    send: (params: SendParams, data: string, statusList: number[]) => Promise<string>;
}
/**
 * Parameters for the Ledger HW
 */
export interface SendParams {
    /**
     * Start of the buffer.
     * Needs to be 0x80.
     */
    cla: number;
    /**
     * Main instruction.
     * Possible values: Signing(0x02) or GetPublicKey (0x04).
     */
    ins: number;
    /**
     * Parameter 1.
     */
    p1: number;
    /**
     * Parameter 2.
     */
    p2: number;
}
