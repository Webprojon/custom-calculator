import { Command } from '../types';
import { CalculatorReceiver } from '../core/receiver';

export class NumberCommand implements Command {
  constructor(
    private receiver: CalculatorReceiver,
    private digit: string,
  ) {}

  execute(): number {
    const currentDisplay = this.receiver.getDisplay();
    const isNewNumber = this.receiver.getIsNewNumber();

    if (isNewNumber || currentDisplay === '0') {
      this.receiver.setDisplay(this.digit);
    } else {
      this.receiver.setDisplay(currentDisplay + this.digit);
    }

    this.receiver.setIsNewNumber(false);
    return parseFloat(this.receiver.getDisplay());
  }
}

export class DecimalCommand implements Command {
  constructor(private receiver: CalculatorReceiver) {}

  execute(): number {
    const currentDisplay = this.receiver.getDisplay();
    const isNewNumber = this.receiver.getIsNewNumber();

    if (isNewNumber) {
      this.receiver.setDisplay('0.');
    } else if (!currentDisplay.includes('.')) {
      this.receiver.setDisplay(`${currentDisplay}.`);
    }

    this.receiver.setIsNewNumber(false);
    return parseFloat(this.receiver.getDisplay());
  }
}
