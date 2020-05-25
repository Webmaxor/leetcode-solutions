class UnionFind {
  constructor () {
    this.id = []
  }

  assign(n) {
    this.id = new Array(n).fill(null).map((v, i) => i)
  }

  root(i) {
    while (i != this.id[i]) i = this.id[i]
    return i
  }

  find(p, q) {
    return this.root(p) === this.root(q)
  }

  union(p, q) {
    let i = this.root(p)
    let j = this.root(q)
    this.id[i] = j
  }

  show() {
    return this.id
  }
}

module.exports = UnionFind

/**
 * Usage
 */
// const obj = new UnionFind();
// obj.assign(10);
// obj.union(4, 3)
// obj.union(3, 8)
// obj.union(6, 5)
// obj.union(9, 4)
// obj.union(2, 1)
// obj.connected(0, 7)
// obj.connected(8, 9)
// obj.union(5, 0)
// obj.union(7, 2)
// obj.connected(0, 7)
// obj.union(1, 0)
// obj.union(6, 1)
// console.log(obj.show());