import { describe, it, expect, beforeEach } from '@jest/globals';
import {
  SquareRootCommand,
  CubeRootCommand,
  NthRootCommand,
} from '../commands/root';
import { CalculatorReceiver } from '../core/receiver';

describe('SquareRootCommand', () => {
  let receiver: CalculatorReceiver;
  let squareRootCommand: SquareRootCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    squareRootCommand = new SquareRootCommand(receiver);
  });

  it('should calculate square root of 4', () => {
    receiver.setDisplay('4');
    const result = squareRootCommand.execute();
    expect(result).toBeCloseTo(2, 10);
  });

  it('should throw error for negative numbers', () => {
    receiver.setDisplay('-4');
    expect(() => squareRootCommand.execute()).toThrow(
      'Square root of negative number',
    );
  });
});

describe('CubeRootCommand', () => {
  let receiver: CalculatorReceiver;
  let cubeRootCommand: CubeRootCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    cubeRootCommand = new CubeRootCommand(receiver);
  });

  it('should calculate cube root of 8', () => {
    receiver.setDisplay('8');
    const result = cubeRootCommand.execute();
    expect(result).toBeCloseTo(2, 10);
  });
});

describe('NthRootCommand', () => {
  let receiver: CalculatorReceiver;
  let nthRootCommand: NthRootCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    nthRootCommand = new NthRootCommand(receiver);
  });

  it('should calculate 4th root of 16', () => {
    receiver.setLeftOperand(16);
    receiver.setRightOperand(4);
    const result = nthRootCommand.execute();
    expect(result).toBeCloseTo(2, 10);
  });

  it('should throw error for 0th root', () => {
    receiver.setLeftOperand(4);
    receiver.setRightOperand(0);
    expect(() => nthRootCommand.execute()).toThrow('Cannot take 0th root');
  });
});
