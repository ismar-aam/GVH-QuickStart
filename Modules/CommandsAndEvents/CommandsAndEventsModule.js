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
define(["require", "exports", "geocortex/framework/application/ModuleBase"], function (require, exports, ModuleBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommandsAndEventsModule = (function (_super) {
        __extends(CommandsAndEventsModule, _super);
        function CommandsAndEventsModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommandsAndEventsModule.prototype.initialize = function (configuration) {
            var _this = this;
            // Register an implementation for the "TestCommand" command.
            this.app.commandRegistry.command("TestCommand").register(this, function (alertText) {
                // Show the text that was passed into the command.
                _this.app.command("Alert").execute(alertText);
                // Dispatch an event notifying others that the command was fired.
                _this.app.eventRegistry.event("TestCommandFiredEvent").publish(alertText);
            });
        };
        return CommandsAndEventsModule;
    }(ModuleBase_1.ModuleBase));
    exports.CommandsAndEventsModule = CommandsAndEventsModule;
});
//# sourceMappingURL=CommandsAndEventsModule.js.map