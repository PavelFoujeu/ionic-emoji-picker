import { Component, Input, EventEmitter, Output } from '@angular/core';
import emojione from 'emojione';
var EmojiButtonComponent = /** @class */ (function () {
    function EmojiButtonComponent() {
        this.selectionEmitter = new EventEmitter();
    }
    EmojiButtonComponent.prototype.ngOnChanges = function () { };
    EmojiButtonComponent.prototype.getEmoji = function (emoji) {
        emoji = emojione.toShort(emoji);
        return emojione.toImage(emoji);
    };
    EmojiButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-button',
                    styleUrls: ['../styles/emoji-button.scss'],
                    template: "\n    <button\n      class=\"emoji-button\" \n      (click)=\"selectionEmitter.emit(dataToEmit || emoji)\">\n      <span [innerHtml]=\"getEmoji(emoji[1])\"></span>\n    </button>\n  "
                },] },
    ];
    /** @nocollapse */
    EmojiButtonComponent.ctorParameters = function () { return []; };
    EmojiButtonComponent.propDecorators = {
        'emoji': [{ type: Input, args: ['emoji',] },],
        'dataToEmit': [{ type: Input, args: ['dataToEmit',] },],
        'options': [{ type: Input, args: ['options',] },],
        'fitzpatrick': [{ type: Input, args: ['fitzpatrick',] },],
        'selectionEmitter': [{ type: Output, args: ['selection',] },],
    };
    return EmojiButtonComponent;
}());
export { EmojiButtonComponent };
//# sourceMappingURL=emoji-button.component.js.map