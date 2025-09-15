import { describe, it, expect, beforeEach } from '@jest/globals';
import { PowerCommand, SquareCommand, CubeCommand } from '../commands/power';
import { CalculatorReceiver } from '../core/receiver';

describe('PowerCommand', () => {
  let receiver: CalculatorReceiver;
  let powerCommand: PowerCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    powerCommand = new PowerCommand(receiver);
  });

  it('should calculate power of 2^3', () => {
    receiver.setLeftOperand(2);
    receiver.setRightOperand(3);
    const result = powerCommand.execute();
    expect(result).toBe(8);
  });

  it('should calculate power of 5^2', () => {
    receiver.setLeftOperand(5);
    receiver.setRightOperand(2);
    const result = powerCommand.execute();
    expect(result).toBe(25);
  });
});

describe('SquareCommand', () => {
  let receiver: CalculatorReceiver;
  let squareCommand: SquareCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    squareCommand = new SquareCommand(receiver);
  });

  it('should calculate square of 3', () => {
    receiver.setDisplay('3');
    const result = squareCommand.execute();
    expect(result).toBe(9);
  });

  it('should update display with result', () => {
    receiver.setDisplay('3');
    squareCommand.execute();
    expect(receiver.getDisplay()).toBe('9');
  });
});

describe('CubeCommand', () => {
  let receiver: CalculatorReceiver;
  let cubeCommand: CubeCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    cubeCommand = new CubeCommand(receiver);
  });

  it('should calculate cube of 2', () => {
    receiver.setDisplay('2');
    const result = cubeCommand.execute();
    expect(result).toBe(8);
  });
});
