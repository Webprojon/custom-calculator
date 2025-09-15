import { describe, it, expect, beforeEach } from '@jest/globals';
import {
  PercentageCommand,
  ReciprocalCommand,
  ToggleSignCommand,
  ClearCommand,
} from '../commands/utility';
import { CalculatorReceiver } from '../core/receiver';

describe('PercentageCommand', () => {
  let receiver: CalculatorReceiver;
  let percentageCommand: PercentageCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    percentageCommand = new PercentageCommand(receiver);
  });

  it('should calculate percentage', () => {
    receiver.setDisplay('50');
    const result = percentageCommand.execute();
    expect(result).toBe(0.5);
  });
});

describe('ReciprocalCommand', () => {
  let receiver: CalculatorReceiver;
  let reciprocalCommand: ReciprocalCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    reciprocalCommand = new ReciprocalCommand(receiver);
  });

  it('should calculate reciprocal', () => {
    receiver.setDisplay('4');
    const result = reciprocalCommand.execute();
    expect(result).toBe(0.25);
  });

  it('should throw error for zero', () => {
    receiver.setDisplay('0');
    expect(() => reciprocalCommand.execute()).toThrow('Division by zero');
  });
});

describe('ToggleSignCommand', () => {
  let receiver: CalculatorReceiver;
  let toggleSignCommand: ToggleSignCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    toggleSignCommand = new ToggleSignCommand(receiver);
  });

  it('should toggle positive to negative', () => {
    receiver.setDisplay('5');
    const result = toggleSignCommand.execute();
    expect(result).toBe(-5);
  });

  it('should toggle negative to positive', () => {
    receiver.setDisplay('-5');
    const result = toggleSignCommand.execute();
    expect(result).toBe(5);
  });
});

describe('ClearCommand', () => {
  let receiver: CalculatorReceiver;
  let clearCommand: ClearCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    clearCommand = new ClearCommand(receiver);
  });

  it('should clear calculator', () => {
    receiver.setDisplay('123');
    clearCommand.execute();
    expect(receiver.getDisplay()).toBe('0');
  });
});
