import { describe, it, expect, beforeEach } from '@jest/globals';
import { NumberCommand, DecimalCommand } from '../commands/number';
import { CalculatorReceiver } from '../core/receiver';

describe('NumberCommand', () => {
  let receiver: CalculatorReceiver;
  let numberCommand: NumberCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    numberCommand = new NumberCommand(receiver, '5');
  });

  it('should add number to display', () => {
    receiver.setDisplay('12');
    receiver.setIsNewNumber(false);
    numberCommand.execute();
    expect(receiver.getDisplay()).toBe('125');
  });

  it('should replace display if new number', () => {
    receiver.setIsNewNumber(true);
    numberCommand.execute();
    expect(receiver.getDisplay()).toBe('5');
  });
});

describe('DecimalCommand', () => {
  let receiver: CalculatorReceiver;
  let decimalCommand: DecimalCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    decimalCommand = new DecimalCommand(receiver);
  });

  it('should add decimal point', () => {
    receiver.setDisplay('12');
    receiver.setIsNewNumber(false);
    decimalCommand.execute();
    expect(receiver.getDisplay()).toBe('12.');
  });

  it('should not add decimal if already exists', () => {
    receiver.setDisplay('12.5');
    receiver.setIsNewNumber(false);
    decimalCommand.execute();
    expect(receiver.getDisplay()).toBe('12.5');
  });
});
