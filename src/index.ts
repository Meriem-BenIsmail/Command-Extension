import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the myextension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'myextension:plugin',
  description: 'A JupyterLab extension',
  autoStart: true,
  requires: [ICommandPalette],
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    const { commands } = app;

    const command = 'jlab-examples:command:palette';

    // Add a command
    commands.addCommand(command, {
      label: 'EXECUTE EXTENSION COMMAND',
      caption: 'Execute jlab-examples:command-palette Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:command-palette has been called ${args['origin']}.`
        );
      }
    });

    // Add the command to the command palette
    const category = 'Extension Examples';
    palette.addItem({ command, category, args: { origin: 'from palette' } });
  }
};

export default plugin;
