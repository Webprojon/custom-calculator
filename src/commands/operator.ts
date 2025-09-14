import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class OperatorCommand implements Command {
  constructor(
    private receiver: CalculatorReceiver,
    private operator: string,
  ) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();
    const leftOperand = this.receiver.getLeftOperand();
    const currentOperator = this.receiver.getOperator();

    // If there's a pending operation, execute it first
    if (leftOperand !== null && currentOperator !== null) {
      this.receiver.setRightOperand(currentNumber);

      // Perform the pending calculation
      let result: number;
      switch (currentOperator) {
        case '+':
          result = this.receiver.add(leftOperand, currentNumber);
          break;
        case '-':
          result = this.receiver.subtract(leftOperand, currentNumber);
          break;
        case '×':
          result = this.receiver.multiply(leftOperand, currentNumber);
          break;
        case '÷':
          result = this.receiver.divide(leftOperand, currentNumber);
          break;
        default:
          result = currentNumber;
      }

      // Update display and set as left operand for next operation
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
    } else {
      // No pending operation, just set current number as left operand
      this.receiver.setLeftOperand(currentNumber);
    }

    // Set the new operator
    this.receiver.setOperator(this.operator);
    this.receiver.setIsNewNumber(true);

    return this.receiver.getCurrentNumber();
  }
}

export class EqualsCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const leftOperand = this.receiver.getLeftOperand();
    const rightOperand =
      this.receiver.getRightOperand() || this.receiver.getCurrentNumber();
    const operator = this.receiver.getOperator();

    if (leftOperand === null || operator === null) {
      return this.receiver.getCurrentNumber();
    }

    this.receiver.setRightOperand(rightOperand);

    // Perform the calculation
    let result: number;
    switch (operator) {
      case '+':
        result = this.receiver.add(leftOperand, rightOperand);
        break;
      case '-':
        result = this.receiver.subtract(leftOperand, rightOperand);
        break;
      case '×':
        result = this.receiver.multiply(leftOperand, rightOperand);
        break;
      case '÷':
        result = this.receiver.divide(leftOperand, rightOperand);
        break;
      default:
        return this.receiver.getCurrentNumber();
    }

    // Update display and state
    this.receiver.setDisplay(result.toString());
    this.receiver.setLeftOperand(result);
    this.receiver.setRightOperand(null);
    this.receiver.setOperator(null);
    this.receiver.setIsNewNumber(true);

    return result;
  }
}
