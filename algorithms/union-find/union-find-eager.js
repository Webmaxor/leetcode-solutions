class UnionFind {
  constructor () {
    this.id = []
  }

  assign(n) {
    this.id = new Array(n).fill(null).map((v, i) => i)
  }

  find(p, q) {
    return this.id[p] === this.id[q]
  }

  union(p, q) {
    let pid = this.id[p]
    let qid = this.id[q]
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] == pid) this.id[i] = qid
    }
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
// obj.find(0, 7)
// obj.find(8, 9)
// obj.union(5, 0)
// obj.union(7, 2)
// obj.find(0, 7)
// obj.union(1, 0)
// obj.union(6, 1)
// console.log(obj.show());