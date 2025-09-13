import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class MemoryClearCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    this.receiver.setMemory(0);
    return 0;
  }
}

export class MemoryAddCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();
    const currentMemory = this.receiver.getMemory();
    const newMemory = this.receiver.add(currentMemory, currentNumber);
    this.receiver.setMemory(newMemory);
    return newMemory;
  }
}

export class MemorySubtractCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();
    const currentMemory = this.receiver.getMemory();
    const newMemory = this.receiver.subtract(currentMemory, currentNumber);
    this.receiver.setMemory(newMemory);
    return newMemory;
  }
}

export class MemoryRecallCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const memoryValue = this.receiver.getMemory();
    this.receiver.setDisplay(memoryValue.toString());
    this.receiver.setLeftOperand(memoryValue);
    this.receiver.setIsNewNumber(true);
    return memoryValue;
  }
}
