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

    if (leftOperand !== null && currentOperator !== null) {
      this.receiver.setRightOperand(currentNumber);
    } else {
      this.receiver.setLeftOperand(currentNumber);
    }

    this.receiver.setOperator(this.operator);
    this.receiver.setIsNewNumber(true);

    return currentNumber;
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

    return rightOperand;
  }
}
