import { LedgerTransport, SendParams } from './ledgerTransport';
/**
 * Alternative implementation of Ledger communication using embedded Iframe from HTTPS location.
 *
 * This is needed in case the Application is not server through HTTPS or is a browser extention.
 */
export declare class LedgerTransportIframe implements LedgerTransport {
    private debug;
    private forwarderUrl;
    private channel;
    private iframe;
    /**
     * Creates Iframe transport
     * @param forwarderUrl HTTPS url of Forwarder
     * @param debug Enable debug messages
     */
    constructor(forwarderUrl: string, debug?: boolean);
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
export interface ChannelMessage {
    id: string;
}
export interface ChannelResponse extends ChannelMessage {
    result: string;
}
export declare function createChannel(forwarderUrl: string, debug: boolean): Promise<[MessageChannel, HTMLIFrameElement]>;
export declare function closeChannel(channel: MessageChannel, iframe: HTMLIFrameElement): Promise<void>;
export declare function sendToChannel<T extends ChannelMessage>(channel: MessageChannel, msg: T, timeoutMs?: number): Promise<ChannelResponse>;
