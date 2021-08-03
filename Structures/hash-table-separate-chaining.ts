class HashTableWithSeparateChaining {
  arrayLength: number;
  array = [];

  constructor(arrLength = 53) {
    this.arrayLength = arrLength;
  }

  public set(key: string, value: string): void {
    const index = this.hash(key, this.arrayLength);

    if (!this.array[index]) {
      this.array[index] = []
    }

    // Don't need to loop over all keys; just get keys at specific index to see if key already exists
    const keysAtIndex = this.gatherKeysAtIndex(index);
    if (keysAtIndex.includes(key)) {
      for (let i = 0; i < keysAtIndex.length; i++) {
        if (keysAtIndex[i] === key) this.array[index][i][1] = value;
      }
    } else {
      this.array[index].push([key, value]);
    }
  }

  private gatherKeysAtIndex(index: number): string[] {
    let keys = [];

    for (let i = 0; i < this.array[index]; i++) {
      keys.push(this.array[index][i][0]);
    }

    return keys;
  }

  public get(key: string): string {
    const index = this.hash(key, this.arrayLength);

    for (let i = 0; i < this.array[index].length; i++) {
      if (this.array[index][i][0] === key) return this.array[index][i][1];
    }

    return undefined;
  }

  public keys(): string[] {
    let keys = [];

    for (let i = 0; i < this.arrayLength; i++) {
      if (this.array[i].length > 0) {
        for (let j = 0; j < this.array[j]; j++) {
          keys.push(this.array[i][j][0])
        }
      }
    }

    return keys;
  }

  public values(): string[] {
    let values = [];

    for (let i = 0; i < this.arrayLength; i++) {
      if (this.array[i].length > 0) {
        for (let j = 0; j < this.array[j]; j++) {
          values.push(this.array[i][j][1])
        }
      }
    }

    return values;
  }

  private hash(key, arrayLength) {
    let total = 0;
    let WEIRD_PRIME = 32;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLength
    }

    return total;
  }
}
