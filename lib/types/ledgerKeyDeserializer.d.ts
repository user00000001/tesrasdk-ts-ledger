import { Crypto } from 'tesrasdk-ts';
import JsonKey = Crypto.JsonKey;
import KeyDeserializer = Crypto.KeyDeserializer;
import PrivateKey = Crypto.PrivateKey;
/**
 * Ledger private key deserializer.
 */
export declare class LedgerKeyDeserializer implements KeyDeserializer {
    getType(): string;
    deserialize(json: JsonKey): PrivateKey;
}
