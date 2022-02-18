export * from './general.types';
import * as streams from './streams';
import * as brand from './brand';
export * from './general';
import * as files from './files';
import * as editor from './editor';

// Ensure BigInto Support
BigInt.prototype.toJSON = function() { return this.toString() }

export {
    files,
    streams,
    brand,
    editor
}