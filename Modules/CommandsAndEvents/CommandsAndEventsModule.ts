/// <reference path="../../../Definitions/Framework.AMD.d.ts"/>


import { ModuleBase } from "geocortex/framework/application/ModuleBase";

export class CommandsAndEventsModule extends ModuleBase {
    initialize(configuration) {

        // Register an implementation for the "TestCommand" command.
        this.app.commandRegistry.command("TestCommand").register(this, (alertText) => {

            // Show the text that was passed into the command.
            this.app.command("Alert").execute(alertText);

            // Dispatch an event notifying others that the command was fired.
            this.app.eventRegistry.event("TestCommandFiredEvent").publish(alertText);
        });
    }
}