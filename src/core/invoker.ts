import { Command } from '../types';
import { CalculatorReceiver } from './receiver';

// Import all command classes
import { AddCommand } from '../commands/add';
import { SubtractCommand } from '../commands/subtract';
import { MultiplyCommand } from '../commands/multiply';
import { DivideCommand } from '../commands/divide';
import { FactorialCommand } from '../commands/factorial';
import {
  PowerCommand,
  SquareCommand,
  CubeCommand,
  TenPowerCommand,
  EPowerCommand,
} from '../commands/power';
import {
  SquareRootCommand,
  CubeRootCommand,
  NthRootCommand,
} from '../commands/root';
import {
  SinCommand,
  CosCommand,
  TanCommand,
  SinhCommand,
  CoshCommand,
  TanhCommand,
} from '../commands/trigonometry';
import { LnCommand, Log10Command } from '../commands/logarithm';
import {
  PercentageCommand,
  ReciprocalCommand,
  ToggleSignCommand,
  ClearCommand,
  ClearEntryCommand,
  RandomCommand,
  ConstantECommand,
  ConstantPiCommand,
  ToggleRadiansCommand,
  ToggleSecondFunctionCommand,
} from '../commands/utility';
import {
  MemoryClearCommand,
  MemoryAddCommand,
  MemorySubtractCommand,
  MemoryRecallCommand,
} from '../commands/memory';
import { NumberCommand, DecimalCommand } from '../commands/number';
import { OperatorCommand, EqualsCommand } from '../commands/operator';

export class CalculatorInvoker {
  private receiver: CalculatorReceiver;
  private commandMap: Map<string, Command>;

  constructor() {
    this.receiver = new CalculatorReceiver();
    this.commandMap = new Map();
    this.initializeCommands();
  }

  private initializeCommands(): void {
    // Basic arithmetic
    this.commandMap.set('+', new AddCommand(this.receiver));
    this.commandMap.set('-', new SubtractCommand(this.receiver));
    this.commandMap.set('×', new MultiplyCommand(this.receiver));
    this.commandMap.set('÷', new DivideCommand(this.receiver));

    // Power operations
    this.commandMap.set('x²', new SquareCommand(this.receiver));
    this.commandMap.set('x³', new CubeCommand(this.receiver));
    this.commandMap.set('xʸ', new PowerCommand(this.receiver));
    this.commandMap.set('10ˣ', new TenPowerCommand(this.receiver));
    this.commandMap.set('eˣ', new EPowerCommand(this.receiver));

    // Root operations
    this.commandMap.set('²√x', new SquareRootCommand(this.receiver));
    this.commandMap.set('³√x', new CubeRootCommand(this.receiver));
    this.commandMap.set('ʸ√x', new NthRootCommand(this.receiver));

    // Trigonometric functions
    this.commandMap.set('sin', new SinCommand(this.receiver));
    this.commandMap.set('cos', new CosCommand(this.receiver));
    this.commandMap.set('tan', new TanCommand(this.receiver));
    this.commandMap.set('sinh', new SinhCommand(this.receiver));
    this.commandMap.set('cosh', new CoshCommand(this.receiver));
    this.commandMap.set('tanh', new TanhCommand(this.receiver));

    // Logarithmic functions
    this.commandMap.set('ln', new LnCommand(this.receiver));
    this.commandMap.set('log₁₀', new Log10Command(this.receiver));

    // Utility functions
    this.commandMap.set('%', new PercentageCommand(this.receiver));
    this.commandMap.set('1/x', new ReciprocalCommand(this.receiver));
    this.commandMap.set('+/-', new ToggleSignCommand(this.receiver));
    this.commandMap.set('AC', new ClearCommand(this.receiver));
    this.commandMap.set('Rand', new RandomCommand(this.receiver));
    this.commandMap.set('e', new ConstantECommand(this.receiver));
    this.commandMap.set('π', new ConstantPiCommand(this.receiver));
    this.commandMap.set('Rad', new ToggleRadiansCommand(this.receiver));
    this.commandMap.set('2nd', new ToggleSecondFunctionCommand(this.receiver));

    // Memory functions
    this.commandMap.set('mc', new MemoryClearCommand(this.receiver));
    this.commandMap.set('m+', new MemoryAddCommand(this.receiver));
    this.commandMap.set('m-', new MemorySubtractCommand(this.receiver));
    this.commandMap.set('mr', new MemoryRecallCommand(this.receiver));

    // Special operations
    this.commandMap.set('x!', new FactorialCommand(this.receiver));
    this.commandMap.set('=', new EqualsCommand(this.receiver));
  }

  executeCommand(action: string, value: string): void {
    try {
      // Handle number input
      if (action === 'number') {
        const numberCommand = new NumberCommand(this.receiver, value);
        numberCommand.execute();
        return;
      }

      // Handle decimal input
      if (action === 'decimal') {
        const decimalCommand = new DecimalCommand(this.receiver);
        decimalCommand.execute();
        return;
      }

      // Handle operator input
      if (action === 'operator') {
        const operatorCommand = new OperatorCommand(this.receiver, value);
        operatorCommand.execute();
        return;
      }

      // Handle equals
      if (action === 'equals') {
        this.handleEquals();
        return;
      }

      // Handle other commands
      const command = this.commandMap.get(value);
      if (command) {
        command.execute();
      } else {
        console.warn(`Unknown command: ${value}`);
      }
    } catch (error) {
      console.error('Command execution error:', error);
    }
  }

  private handleEquals(): void {
    const leftOperand = this.receiver.getLeftOperand();
    const operator = this.receiver.getOperator();
    const rightOperand =
      this.receiver.getRightOperand() || this.receiver.getCurrentNumber();

    if (leftOperand === null || operator === null) {
      return;
    }

    try {
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
        case 'xʸ':
          result = this.receiver.power(leftOperand, rightOperand);
          break;
        case 'ʸ√x':
          result = this.receiver.nthRoot(leftOperand, rightOperand);
          break;
        default:
          return;
      }

      this.receiver.setDisplay(result.toString());
      this.receiver.setLeftOperand(result);
      this.receiver.setRightOperand(null);
      this.receiver.setOperator(null);
      this.receiver.setIsNewNumber(true);
    } catch (error) {
      this.receiver.handleError({
        message: 'Calculation error',
        type: 'INVALID_OPERATION',
      });
    }
  }

  getReceiver(): CalculatorReceiver {
    return this.receiver;
  }
}
