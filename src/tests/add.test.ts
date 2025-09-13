import { describe, it, expect, beforeEach } from '@jest/globals';
import { AddCommand } from '../commands/add';
import { CalculatorReceiver } from '../core/receiver';

describe('AddCommand', () => {
  let receiver: CalculatorReceiver;
  let addCommand: AddCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    addCommand = new AddCommand(receiver);
  });

  it('should add two positive numbers', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(3);
    const result = addCommand.execute();
    expect(result).toBe(8);
  });

  it('should add negative numbers', () => {
    receiver.setLeftOperand(-5);
    receiver.setRightOperand(-3);
    const result = addCommand.execute();
    expect(result).toBe(-8);
  });

  it('should add positive and negative', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(-3);
    const result = addCommand.execute();
    expect(result).toBe(2);
  });

  it('should update display with result', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(3);
    addCommand.execute();
    expect(receiver.getDisplay()).toBe('8');
  });
});
