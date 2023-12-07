export function sumOfDigits(n: number): number {
    return Math.abs(n).toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

export function isAccessible(x: number, y: number): boolean {
    return sumOfDigits(x) + sumOfDigits(y) <= 19;
}