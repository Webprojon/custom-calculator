import { describe, it, expect, beforeEach } from '@jest/globals';
import {
  MemoryClearCommand,
  MemoryAddCommand,
  MemoryRecallCommand,
} from '../commands/memory';
import { CalculatorReceiver } from '../core/receiver';

describe('MemoryClearCommand', () => {
  let receiver: CalculatorReceiver;
  let memoryClearCommand: MemoryClearCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    memoryClearCommand = new MemoryClearCommand(receiver);
  });

  it('should clear memory', () => {
    receiver.setMemory(100);
    memoryClearCommand.execute();
    expect(receiver.getMemory()).toBe(0);
  });
});

describe('MemoryAddCommand', () => {
  let receiver: CalculatorReceiver;
  let memoryAddCommand: MemoryAddCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    memoryAddCommand = new MemoryAddCommand(receiver);
  });

  it('should add to memory', () => {
    receiver.setMemory(50);
    receiver.setDisplay('25');
    memoryAddCommand.execute();
    expect(receiver.getMemory()).toBe(75);
  });
});

describe('MemoryRecallCommand', () => {
  let receiver: CalculatorReceiver;
  let memoryRecallCommand: MemoryRecallCommand;

  beforeEach(() => {
    receiver = new CalculatorReceiver();
    memoryRecallCommand = new MemoryRecallCommand(receiver);
  });

  it('should recall memory value', () => {
    receiver.setMemory(100);
    memoryRecallCommand.execute();
    expect(receiver.getDisplay()).toBe('100');
  });
});
