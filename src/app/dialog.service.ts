import { Injectable } from '@angular/core';

/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
@Injectable()
export class DialogService {

  constructor() { }

  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns promise resolving to `true`=confirm or `false`=cancel
   * i.e. Returns a promise that resolves when the user eventually decides what to do: either to discard changes and navigate away (true) or to preserve the pending changes and stay in the crisis editor (false).
   */
  confirm(message?: string) {
    return new Promise<boolean>(resolve => {
      return resolve(window.confirm(message || 'Is it OK?'));
    })
  }

}
