import { describe, it, expect, beforeEach } from '@jest/globals';
import { DivideCommand } from '../commands/divide';
import { CalculatorReceiver } from '../core/receiver';

describe('DivideCommand', () => {
  let receiver: CalculatorReceiver;
  let divideCommand: DivideCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    divideCommand = new DivideCommand(receiver);
  });

  it('should divide two numbers', () => {
    receiver.setLeftOperand(15);
    receiver.setRightOperand(3);
    const result = divideCommand.execute();
    expect(result).toBe(5);
  });

  it('should throw error when dividing by zero', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(0);
    expect(() => divideCommand.execute()).toThrow('Division by zero');
  });

  it('should update display with result', () => {
    receiver.setLeftOperand(15);
    receiver.setRightOperand(3);
    divideCommand.execute();
    expect(receiver.getDisplay()).toBe('5');
  });
});
