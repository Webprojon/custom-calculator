import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class PowerCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const left = this.receiver.getLeftOperand() || 0;
    const right = this.receiver.getRightOperand() || 0;

    try {
      const result = this.receiver.power(left, right);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setRightOperand(null);
      this.receiver.setOperator(null);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid power',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}

export class SquareCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.power(currentNumber, 2);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid square',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}

export class CubeCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.power(currentNumber, 3);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid cube',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}

export class TenPowerCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.power(10, currentNumber);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid 10 power',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}

export class EPowerCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.power(this.receiver.getE(), currentNumber);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setIsNewNumber(true);
      return result;
    } catch (error) {
      this.receiver.handleError({
        message: 'Invalid e power',
        type: 'INVALID_OPERATION',
      });
      throw error;
    }
  }
}
