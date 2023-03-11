export default class Builder {
  private items: string[];

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.items = [];
  }

  public withProduct(): void {
    this.items.push('item');
  }

  public build(): string[] {
    const result = this.items;
    this.reset();
    return result;
  }
}

export const builder = new Builder();
