import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';
import { HistoryManager } from '../core/historyManager';

/**
 * UndoCommand - Implements undo functionality
 * Restores calculator to previous state
 */
export class UndoCommand implements Command {
  constructor(
    private receiver: CalculatorReceiver,
    private historyManager: HistoryManager,
  ) {}

  execute(): number {
    const previousState = this.historyManager.getPreviousState();

    if (previousState) {
      this.receiver.setState(previousState);
      return this.receiver.getCurrentNumber();
    }

    return this.receiver.getCurrentNumber();
  }

  undo(): void {
    // Undo command cannot be undone
    // This prevents infinite undo loops
  }
}

/**
 * RedoCommand - Implements redo functionality
 * Restores calculator to next state
 */
export class RedoCommand implements Command {
  constructor(
    private receiver: CalculatorReceiver,
    private historyManager: HistoryManager,
  ) {}

  execute(): number {
    const nextState = this.historyManager.getNextState();

    if (nextState) {
      this.receiver.setState(nextState);
      return this.receiver.getCurrentNumber();
    }

    return this.receiver.getCurrentNumber();
  }

  undo(): void {
    // Redo command cannot be undone
    // This prevents infinite redo loops
  }
}
