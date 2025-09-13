import { describe, it, expect, beforeEach } from '@jest/globals';
import { OperatorCommand, EqualsCommand } from '../commands/operator';
import { CalculatorReceiver } from '../core/receiver';

describe('OperatorCommand', () => {
  let receiver: CalculatorReceiver;
  let operatorCommand: OperatorCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    operatorCommand = new OperatorCommand(receiver, '+');
  });

  it('should set operator', () => {
    receiver.setDisplay('5');
    operatorCommand.execute();
    expect(receiver.getOperator()).toBe('+');
    expect(receiver.getLeftOperand()).toBe(5);
  });
});

describe('EqualsCommand', () => {
  let receiver: CalculatorReceiver;
  let equalsCommand: EqualsCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    equalsCommand = new EqualsCommand(receiver);
  });

  it('should return right operand', () => {
    receiver.setLeftOperand(5);
    receiver.setOperator('+');
    receiver.setRightOperand(3);
    const result = equalsCommand.execute();
    expect(result).toBe(3);
  });
});
