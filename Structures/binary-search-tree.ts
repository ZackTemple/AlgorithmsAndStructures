export class NodeBST {
  left: NodeBST;
  right: NodeBST;
  data: number;

  public constructor(value: number) {
    this.data = value;
  }

  public insert(value: number): void {
    if (value <= this.data) {
      if (this.left === null) {
        this.left = new NodeBST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new NodeBST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  public contains(value: number): boolean {
    if (this.data === value) {
      return true;
    } else if (value < this.data) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  public printInOrder(): void {
    if (this.left !== null) {
      this.left.printInOrder();
    }

    console.log(this.data);

    if(this.right !== null) {
      this.right.printInOrder();
    }
  }

  public printPreOrder(): void {
    console.log(this.data);

    if (this.left !== null) {
      this.left.printPreOrder();
    }

    if (this.right !== null) {
      this.right.printPreOrder();
    }
  }

  public printPostOrder(): void {
    if (this.right !== null) {
      this.right.printPreOrder();
    }

    console.log(this.data);

    if (this.left !== null) {
      this.left.printPreOrder();
    }
  }
}
