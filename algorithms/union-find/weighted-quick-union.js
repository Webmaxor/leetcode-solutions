class QuickFind {
  constructor () {
    this.id = []
    this.sz = []
  }

  assign(n) {
    this.id = new Array(n).fill(null).map((v, i) => i)
    this.sz = new Array(n).fill(1)
  }

  root(i) {
    while (i != this.id[i]) i = this.id[i]
    return i
  }

  connected(p, q) {
    return this.root(p) === this.root(q)
  }

  union(p, q) {
    let i = this.root(p)
    let j = this.root(q)
    if (i == j) return;
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j
      this.sz[j] += this.sz[i]
    }
    else {
      this.id[j] = i
      this.sz[i] += this.sz[j]
    }
  }

  show() {
    return this.id
  }
}

const obj = new QuickFind();
obj.assign(10);
obj.union(4, 3)
obj.union(3, 8)
obj.union(6, 5)
obj.union(9, 4)
obj.union(2, 1)
obj.connected(0, 7)
obj.connected(8, 9)
obj.union(5, 0)
obj.union(7, 2)
obj.connected(0, 7)
obj.union(1, 0)
obj.union(6, 1)

console.log(obj.show());