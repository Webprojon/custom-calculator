import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class FactorialCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.factorial(currentNumber);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid factorial',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}
