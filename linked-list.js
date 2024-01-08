/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0); 
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error('Invalid index.');
    let cur = this.head;
    let count = 0;
    while (count !== idx) {
      cur = cur.next;
      count++;
    }
    return cur.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) throw new Error('Invalid index.');
    let cur = this.head;
    let count = 0;
    while (count !== idx) {
      cur = cur.next;
      count++;
    }
    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) throw new Error('Invalid index.');
    let cur = this.head;
    let count = 0;
    while (count !== idx - 1) {
      cur = cur.next;
      count++;
    }
    const newNode = new Node(val);
    newNode.next = cur.next;
    cur.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error('Invalid index.');
    let cur = this.head;
    let count = 0;
    while (count !== idx - 1) {
      cur = cur.next;
      count++;
    }
    const removed = cur.next;
    cur.next = removed.next;
    this.length--;
    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.length) return 0;
    let cur = this.head;
    let sum = 0;
    while (cur) {
      sum += cur.val;
      cur = cur.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
