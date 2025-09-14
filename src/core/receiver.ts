import { CalculatorState, CalculatorError } from '../types';

export class CalculatorReceiver {
  private state: CalculatorState;

  constructor() {
    this.state = {
      display: '0',
      leftOperand: null,
      rightOperand: null,
      operator: null,
      memory: 0,
      isNewNumber: true,
      isRadians: true,
      secondFunction: false,
    };
  }

  getState(): CalculatorState {
    return { ...this.state };
  }

  setState(state: CalculatorState): void {
    this.state = { ...state };
    this.updateDisplay();
  }

  setDisplay(value: string): void {
    this.state.display = value;
    this.updateDisplay();
  }

  getDisplay(): string {
    return this.state.display;
  }

  getCurrentNumber(): number {
    const num = parseFloat(this.state.display);
    return isNaN(num) ? 0 : num;
  }

  setLeftOperand(value: number | null): void {
    this.state.leftOperand = value;
  }

  getLeftOperand(): number | null {
    return this.state.leftOperand;
  }

  setRightOperand(value: number | null): void {
    this.state.rightOperand = value;
  }

  getRightOperand(): number | null {
    return this.state.rightOperand;
  }

  setOperator(operator: string | null): void {
    this.state.operator = operator;
  }

  getOperator(): string | null {
    return this.state.operator;
  }

  setMemory(value: number): void {
    this.state.memory = value;
  }

  getMemory(): number {
    return this.state.memory;
  }

  setIsNewNumber(value: boolean): void {
    this.state.isNewNumber = value;
  }

  getIsNewNumber(): boolean {
    return this.state.isNewNumber;
  }

  setIsRadians(value: boolean): void {
    this.state.isRadians = value;
  }

  getIsRadians(): boolean {
    return this.state.isRadians;
  }

  setSecondFunction(value: boolean): void {
    this.state.secondFunction = value;
  }

  getSecondFunction(): boolean {
    return this.state.secondFunction;
  }

  clear(): void {
    this.state.display = '0';
    this.state.leftOperand = null;
    this.state.rightOperand = null;
    this.state.operator = null;
    this.state.isNewNumber = true;
    this.updateDisplay();
  }

  clearEntry(): void {
    this.state.display = '0';
    this.state.isNewNumber = true;
    this.updateDisplay();
  }

  public updateDisplay(): void {
    const displayElement = document.getElementById('display-text');
    if (displayElement) {
      displayElement.textContent = this.state.display;
    }
  }

  handleError(error: CalculatorError): void {
    this.state.display = 'Error';
    this.state.isNewNumber = true;
    this.updateDisplay();
  }

  // Mathematical operations
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  power(base: number, exponent: number): number {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    let result = 1;
    const isNegative = exponent < 0;
    const absExp = isNegative ? -exponent : exponent;

    for (let i = 0; i < absExp; i++) {
      result *= base;
    }

    return isNegative ? 1 / result : result;
  }

  squareRoot(x: number): number {
    if (x < 0) {
      throw new Error('Square root of negative number');
    }
    if (x === 0) return 0;
    if (x === 1) return 1;

    // Newton's method for square root
    let guess = x / 2;
    for (let i = 0; i < 10; i++) {
      guess = (guess + x / guess) / 2;
    }
    return guess;
  }

  cubeRoot(x: number): number {
    if (x === 0) return 0;
    if (x === 1) return 1;

    // Newton's method for cube root
    let guess = x / 3;
    for (let i = 0; i < 10; i++) {
      guess = (2 * guess + x / (guess * guess)) / 3;
    }
    return guess;
  }

  nthRoot(x: number, n: number): number {
    if (n === 0) {
      throw new Error('Cannot take 0th root');
    }
    if (x < 0 && n % 2 === 0) {
      throw new Error('Even root of negative number');
    }
    if (x === 0) return 0;
    if (x === 1) return 1;

    // Newton's method for nth root
    let guess = x / n;
    for (let i = 0; i < 10; i++) {
      guess = ((n - 1) * guess + x / this.power(guess, n - 1)) / n;
    }
    return guess;
  }

  factorial(n: number): number {
    if (n < 0) {
      throw new Error('Factorial of negative number');
    }
    if (n !== Math.floor(n)) {
      throw new Error('Factorial of non-integer');
    }
    if (n > 170) {
      throw new Error('Factorial too large');
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  percentage(value: number): number {
    return value / 100;
  }

  reciprocal(x: number): number {
    if (x === 0) {
      throw new Error('Division by zero');
    }
    return 1 / x;
  }

  toggleSign(x: number): number {
    return -x;
  }

  // Constants
  getE(): number {
    return 2.718281828459045;
  }

  getPi(): number {
    return 3.141592653589793;
  }

  // Trigonometric functions
  sin(x: number): number {
    const radians = this.state.isRadians ? x : (x * this.getPi()) / 180;
    return this.sinTaylor(radians);
  }

  cos(x: number): number {
    const radians = this.state.isRadians ? x : (x * this.getPi()) / 180;
    return this.cosTaylor(radians);
  }

  tan(x: number): number {
    const cosValue = this.cos(x);
    if (Math.abs(cosValue) < 1e-10) {
      throw new Error('Tangent undefined');
    }
    return this.sin(x) / cosValue;
  }

  private sinTaylor(x: number): number {
    let result = 0;
    let term = x;
    for (let i = 1; i <= 10; i++) {
      result += term;
      term *= (-x * x) / (2 * i * (2 * i + 1));
    }
    return result;
  }

  private cosTaylor(x: number): number {
    let result = 0;
    let term = 1;
    for (let i = 0; i <= 10; i++) {
      result += term;
      term *= (-x * x) / ((2 * i + 1) * (2 * i + 2));
    }
    return result;
  }

  // Hyperbolic functions
  sinh(x: number): number {
    return (this.power(this.getE(), x) - this.power(this.getE(), -x)) / 2;
  }

  cosh(x: number): number {
    return (this.power(this.getE(), x) + this.power(this.getE(), -x)) / 2;
  }

  tanh(x: number): number {
    const sinhValue = this.sinh(x);
    const coshValue = this.cosh(x);
    if (Math.abs(coshValue) < 1e-10) {
      throw new Error('Hyperbolic tangent undefined');
    }
    return sinhValue / coshValue;
  }

  // Logarithmic functions
  ln(x: number): number {
    if (x <= 0) {
      throw new Error('Logarithm of non-positive number');
    }
    if (x === 1) return 0;

    if (x < 1) {
      return -this.ln(1 / x);
    }

    let result = 0;
    const term = (x - 1) / (x + 1);
    const termSquared = term * term;
    let currentTerm = term;

    for (let i = 0; i < 100; i++) {
      result += currentTerm / (2 * i + 1);
      currentTerm *= termSquared;
    }

    return 2 * result;
  }

  log10(x: number): number {
    return this.ln(x) / this.ln(10);
  }

  // Random number generation
  random(): number {
    return Math.random();
  }
}
