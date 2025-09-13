import { CalculatorState } from '../types';

/**
 * HistoryManager - Implements Snapshot pattern for undo/redo functionality
 * Manages calculator state history for undo/redo operations
 */
export class HistoryManager {
  private history: CalculatorState[] = [];
  private currentIndex: number = -1;
  private maxHistorySize: number = 50;

  /**
   * Saves current state to history
   * @param state - Calculator state to save
   */
  saveState(state: CalculatorState): void {
    // Remove any states after current index (when redo was used)
    this.history = this.history.slice(0, this.currentIndex + 1);

    // Add new state
    this.history.push({ ...state });
    this.currentIndex++;

    // Limit history size
    if (this.history.length > this.maxHistorySize) {
      this.history.shift();
      this.currentIndex--;
    }
  }

  /**
   * Gets previous state for undo operation
   * @returns Previous state or null if no history
   */
  getPreviousState(): CalculatorState | null {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const state = this.history[this.currentIndex];
      if (!state) return null;
      return {
        display: state.display,
        leftOperand: state.leftOperand,
        rightOperand: state.rightOperand,
        operator: state.operator,
        memory: state.memory,
        isNewNumber: state.isNewNumber,
        isRadians: state.isRadians,
        secondFunction: state.secondFunction,
      };
    }
    return null;
  }

  /**
   * Gets next state for redo operation
   * @returns Next state or null if no redo available
   */
  getNextState(): CalculatorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      const state = this.history[this.currentIndex];
      if (!state) return null;
      return {
        display: state.display,
        leftOperand: state.leftOperand,
        rightOperand: state.rightOperand,
        operator: state.operator,
        memory: state.memory,
        isNewNumber: state.isNewNumber,
        isRadians: state.isRadians,
        secondFunction: state.secondFunction,
      };
    }
    return null;
  }

  /**
   * Checks if undo is available
   * @returns True if undo is possible
   */
  canUndo(): boolean {
    return this.currentIndex > 0;
  }

  /**
   * Checks if redo is available
   * @returns True if redo is possible
   */
  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1;
  }

  /**
   * Clears all history
   */
  clearHistory(): void {
    this.history = [];
    this.currentIndex = -1;
  }

  /**
   * Gets current history size
   * @returns Number of states in history
   */
  getHistorySize(): number {
    return this.history.length;
  }

  /**
   * Gets current index in history
   * @returns Current history index
   */
  getCurrentIndex(): number {
    return this.currentIndex;
  }
}
