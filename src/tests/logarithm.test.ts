import { describe, it, expect, beforeEach } from '@jest/globals';
import { LnCommand, Log10Command } from '../commands/logarithm';
import { CalculatorReceiver } from '../core/receiver';

describe('LnCommand', () => {
  let receiver: CalculatorReceiver;
  let lnCommand: LnCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    lnCommand = new LnCommand(receiver);
  });

  it('should calculate ln of 1', () => {
    receiver.setDisplay('1');
    const result = lnCommand.execute();
    expect(result).toBeCloseTo(0, 10);
  });

  it('should calculate ln of e', () => {
    receiver.setDisplay('2.718281828');
    const result = lnCommand.execute();
    expect(result).toBeCloseTo(1, 5);
  });

  it('should throw error for negative numbers', () => {
    receiver.setDisplay('-1');
    expect(() => lnCommand.execute()).toThrow(
      'Logarithm of non-positive number',
    );
  });
});

describe('Log10Command', () => {
  let receiver: CalculatorReceiver;
  let log10Command: Log10Command;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    log10Command = new Log10Command(receiver);
  });

  it('should calculate log10 of 1', () => {
    receiver.setDisplay('1');
    const result = log10Command.execute();
    expect(result).toBeCloseTo(0, 10);
  });

  it('should calculate log10 of 10', () => {
    receiver.setDisplay('10');
    const result = log10Command.execute();
    expect(result).toBeCloseTo(1, 10);
  });
});
