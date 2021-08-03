// The following implementation allows for collision.
// In order to handle collisions, we can do multiple things
// 1. Change the hashmap to an arrya, and increase its size when collisions happen
// 2. Create "buckets" when using arrays, that will create objects inside of the individual arrays whenever collisions happen:
// [
//    0: [{val: 'cat', ind: 0}, {val: 'dog', ind: 1}],
//    1: [...],
//    2: [...],
//  ...]
// 3. Create linked lists for each hash code in the object (for an array, each index would be a linked list)

class HashTable {
  values: Object = {};
  size = 0
  length = 0;

  constructor(size = 13) {
    this.size = size;
  }

  getHashFromKey(key: any) {
    let hashValue = 0;

    // account for different types by tacking on type to key
    const stringTypeKey = `${key}${typeof key}`;

    // use char code and bitwise shift operator to find the hashvalue (makes hashes personalized to key types and ordering)
    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
  }

  addKeyValuePair(key: any, value: any): void {
    const hash = this.getHashFromKey(key);

    // Hash does not exist in Hash Table yet
    if (!this.values.hasOwnProperty(hash)) this.values[hash] = {};

    // increment table size if the hash does not exist yet
    if (!this.values[hash].hasOwnProperty(key)) this.length++;

    // update value
    this.values[hash][key] = value;
  }

  getValue(key: any): any {
    const hash = this.getHashFromKey(key);
    const hashExistsInTable = this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key);

    return hashExistsInTable ? this.values[hash][key] : null;
  }
}
