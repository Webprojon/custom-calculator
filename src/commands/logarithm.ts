import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class LnCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.ln(currentNumber);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid natural logarithm',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}

export class Log10Command implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.log10(currentNumber);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid base 10 logarithm',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}
