/// <reference path="../../../Definitions/Framework.AMD.d.ts"/>

import { ViewModelBase } from "geocortex/framework/ui/ViewModelBase";
import { Observable } from "geocortex/framework/observables";

export class CommandsAndEventsViewModel extends ViewModelBase {

    eventMessage: Observable<string> = new Observable("");

    initialize() {
        // Listen for the event "TestCommandFiredEvent" and update the model accordingly.
        this.app.eventRegistry.event("TestCommandFiredEvent").subscribe(this, (eventArg: string) => {
            // The event has been fired. Update the model with the message.
            this.eventMessage.set(eventArg);
        });
    }
}