import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class PercentageCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();
    const result = this.receiver.percentage(currentNumber);
    this.receiver.setDisplay(result.toString());
    this.receiver.setLeftOperand(result);
    this.receiver.setIsNewNumber(true);
    return result;
  }
}

export class ReciprocalCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();

    try {
      const result = this.receiver.reciprocal(currentNumber);
      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
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

export class ToggleSignCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentNumber = this.receiver.getCurrentNumber();
    const result = this.receiver.toggleSign(currentNumber);
    this.receiver.setDisplay(result.toString());
    this.receiver.setLeftOperand(result);
    this.receiver.setIsNewNumber(true);
    return result;
  }
}

export class ClearCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    this.receiver.clear();
    return 0;
  }
}

export class ClearEntryCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    this.receiver.clearEntry();
    return 0;
  }
}

export class RandomCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const result = this.receiver.random();
    this.receiver.setDisplay(result.toString());
    this.receiver.setLeftOperand(result);
    this.receiver.setIsNewNumber(true);
    return result;
  }
}

export class ConstantECommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const result = this.receiver.getE();
    this.receiver.setDisplay(result.toString());
    this.receiver.setLeftOperand(result);
    this.receiver.setIsNewNumber(true);
    return result;
  }
}

export class ConstantPiCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const result = this.receiver.getPi();
    this.receiver.setDisplay(result.toString());
    this.receiver.setLeftOperand(result);
    this.receiver.setIsNewNumber(true);
    return result;
  }
}

export class ToggleRadiansCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentRadians = this.receiver.getIsRadians();
    this.receiver.setIsRadians(!currentRadians);
    const displayText = !currentRadians ? 'Rad' : 'Deg';
    this.receiver.setDisplay(displayText);
    return 0;
  }
}

export class ToggleSecondFunctionCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentSecondFunction = this.receiver.getSecondFunction();
    this.receiver.setSecondFunction(!currentSecondFunction);
    return 0;
  }
}
