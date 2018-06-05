/// <reference path="../../../Definitions/Framework.AMD.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "geocortex/framework/ui/ViewBase"], function (require, exports, ViewBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommandsAndEventsView = (function (_super) {
        __extends(CommandsAndEventsView, _super);
        function CommandsAndEventsView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommandsAndEventsView.prototype.handleClickExample = function (event, element, context) {
            // Execute the command "TestCommand".
            this.app.commandRegistry.command("TestCommand").execute("Hello");
        };
        return CommandsAndEventsView;
    }(ViewBase_1.ViewBase));
    exports.CommandsAndEventsView = CommandsAndEventsView;
});
//# sourceMappingURL=CommandsAndEventsView.js.map