import { describe, it, expect, beforeEach } from '@jest/globals';
import { SinCommand, CosCommand, TanCommand } from '../commands/trigonometry';
import { CalculatorReceiver } from '../core/receiver';

describe('SinCommand', () => {
  let receiver: CalculatorReceiver;
  let sinCommand: SinCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    sinCommand = new SinCommand(receiver);
  });

  it('should calculate sin of 0', () => {
    receiver.setDisplay('0');
    const result = sinCommand.execute();
    expect(result).toBeCloseTo(0, 10);
  });

  it('should calculate sin of π/2 radians', () => {
    receiver.setDisplay('1.5708');
    const result = sinCommand.execute();
    expect(result).toBeCloseTo(1, 10);
  });
});

describe('CosCommand', () => {
  let receiver: CalculatorReceiver;
  let cosCommand: CosCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    cosCommand = new CosCommand(receiver);
  });

  it('should calculate cos of 0', () => {
    receiver.setDisplay('0');
    const result = cosCommand.execute();
    expect(result).toBeCloseTo(1, 10);
  });

  it('should calculate cos of π/2 radians', () => {
    receiver.setDisplay('1.5708');
    const result = cosCommand.execute();
    expect(result).toBeCloseTo(0, 5);
  });
});

describe('TanCommand', () => {
  let receiver: CalculatorReceiver;
  let tanCommand: TanCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    tanCommand = new TanCommand(receiver);
  });

  it('should calculate tan of 0', () => {
    receiver.setDisplay('0');
    const result = tanCommand.execute();
    expect(result).toBeCloseTo(0, 10);
  });

  it('should calculate tan of π/4 radians', () => {
    receiver.setDisplay('0.7854');
    const result = tanCommand.execute();
    expect(result).toBeCloseTo(1, 5);
  });
});
