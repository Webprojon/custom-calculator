import { describe, it, expect, beforeEach } from '@jest/globals';
import { UndoCommand, RedoCommand } from '../commands/undo';
import { CalculatorReceiver } from '../core/receiver';
import { HistoryManager } from '../core/historyManager';

describe('UndoCommand', () => {
  let receiver: CalculatorReceiver;
  let historyManager: HistoryManager;
  let undoCommand: UndoCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    historyManager = new HistoryManager();
    undoCommand = new UndoCommand(receiver, historyManager);
  });

  it('should execute undo command', () => {
    // Just test that command executes without error
    expect(() => undoCommand.execute()).not.toThrow();
  });

  it('should not change state if no history', () => {
    const originalDisplay = receiver.getDisplay();
    undoCommand.execute();
    expect(receiver.getDisplay()).toBe(originalDisplay);
  });
});

describe('RedoCommand', () => {
  let receiver: CalculatorReceiver;
  let historyManager: HistoryManager;
  let redoCommand: RedoCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    historyManager = new HistoryManager();
    redoCommand = new RedoCommand(receiver, historyManager);
  });

  it('should execute redo command', () => {
    // Just test that command executes without error
    expect(() => redoCommand.execute()).not.toThrow();
  });

  it('should not change state if no redo available', () => {
    const originalDisplay = receiver.getDisplay();
    redoCommand.execute();
    expect(receiver.getDisplay()).toBe(originalDisplay);
  });
});

describe('HistoryManager', () => {
  let historyManager: HistoryManager;

  beforeEach(() => {
    historyManager = new HistoryManager();
  });

  it('should save and retrieve states', () => {
    const state1 = {
      display: '1',
      leftOperand: 1,
      rightOperand: null,
      operator: null,
      memory: 0,
      isNewNumber: true,
      isRadians: true,
      secondFunction: false,
    };
    const state2 = {
      display: '2',
      leftOperand: 2,
      rightOperand: null,
      operator: null,
      memory: 0,
      isNewNumber: true,
      isRadians: true,
      secondFunction: false,
    };

    historyManager.saveState(state1);
    historyManager.saveState(state2);

    expect(historyManager.canUndo()).toBe(true);
    expect(historyManager.canRedo()).toBe(false);

    const prevState = historyManager.getPreviousState();
    expect(prevState?.display).toBe('1');
    expect(historyManager.canRedo()).toBe(true);
  });

  it('should limit history size', () => {
    // Save more than max size
    for (let i = 0; i < 60; i++) {
      historyManager.saveState({
        display: i.toString(),
        leftOperand: i,
        rightOperand: null,
        operator: null,
        memory: 0,
        isNewNumber: true,
        isRadians: true,
        secondFunction: false,
      });
    }

    expect(historyManager.getHistorySize()).toBe(50);
  });
});
