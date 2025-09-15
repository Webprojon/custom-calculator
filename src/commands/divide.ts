import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class DivideCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const left = this.receiver.getLeftOperand() || 0;
    const right = this.receiver.getRightOperand() || 0;

    try {
      const result = this.receiver.divide(left, right);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setRightOperand(null);
      this.receiver.setOperator(null);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Division by zero',
        type: 'DIVISION_BY_ZERO',
      });
      throw error;
    }
  }
}
