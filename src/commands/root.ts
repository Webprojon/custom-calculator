import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class SquareRootCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.squareRoot(currentNumber);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Square root of negative number',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}

export class CubeRootCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.cubeRoot(currentNumber);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid cube root',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}

export class NthRootCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const left = this.receiver.getLeftOperand() || 0;
    const right = this.receiver.getRightOperand() || 0;

    try {
      const result = this.receiver.nthRoot(left, right);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setRightOperand(null);
      this.receiver.setOperator(null);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid nth root',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}
