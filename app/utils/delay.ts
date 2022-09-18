export class Delay {
  private timeout?: ReturnType<typeof setTimeout>;
  call(callback: () => any, ms: number) {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.timeout = undefined;
      callback();
    }, ms);
  }
}
