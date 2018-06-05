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
define(["require", "exports", "geocortex/framework/ui/ViewModelBase", "geocortex/framework/observables"], function (require, exports, ViewModelBase_1, observables_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommandsAndEventsViewModel = (function (_super) {
        __extends(CommandsAndEventsViewModel, _super);
        function CommandsAndEventsViewModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.eventMessage = new observables_1.Observable("");
            return _this;
        }
        CommandsAndEventsViewModel.prototype.initialize = function () {
            var _this = this;
            // Listen for the event "TestCommandFiredEvent" and update the model accordingly.
            this.app.eventRegistry.event("TestCommandFiredEvent").subscribe(this, function (eventArg) {
                // The event has been fired. Update the model with the message.
                _this.eventMessage.set(eventArg);
            });
        };
        return CommandsAndEventsViewModel;
    }(ViewModelBase_1.ViewModelBase));
    exports.CommandsAndEventsViewModel = CommandsAndEventsViewModel;
});
//# sourceMappingURL=CommandsAndEventsViewModel.js.map