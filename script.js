class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.first = null
    this.size = 0
  }

  append(value) {
    if (this.size === 0) this.first = new Node(value)
    else {
      let current = this.first
      while (current.next !== null) {
        current = current.next
      }
      current.next = new Node(value)
    }
    this.size++
  }

  prepend(value) {
    this.first = new Node(value, this.first)
    this.size++
  }

  size() {
    console.log(this.size)
  }

  first() {
    console.log(this.first)
  }

  last() {
    let current = this.first
    while (current.next !== null) {
      current = current.next
    }
    console.log(current)
  }

  at(index) {
    if (index < 0 || index > this.size) {
      return "There's nothing there"
    } else {
      let current = this.first
      let currentIndex = 0

      while (currentIndex < index) {
        current = current.next
        currentIndex++
      }

      console.log(current)
    }
  }

  pop() {
    if (this.size === 0) return
    else {
      let current = this.first
      while (current.next.next !== null) {
        current = current.next
      }
      current.next = null
    }
    this.size--
  }

  contains(value) {
    let current = this.first
    while (current !== null && current.value !== value) {
      current = current.next
    }
    if (current === null) console.log(false)
    else console.log(true)
  }

  find(value) {
    let current = this.first
    while (current !== null && current.value !== value) {
      current = current.next
    }
    if (current === null) return
    else console.log(current.value)
  }

  toString() {
    let current = this.first
    let string = ""

    while (current.next !== null) {
      string = string.concat(`(${current.value}) -> `)
      current = current.next

      if (current.next === null) {
        string = string.concat(`(${current.value})`)
      }
    }

    console.log(string)
  }

  insertAt(index, value) {
    if (index === 0) {
      this.prepend(value)
      return
    }

    let current = this.first
    let currentIndex = 0
    let previous
    let newNode = new Node(value)
    while (current !== null && currentIndex !== index) {
      previous = current
      current = current.next
      currentIndex++
    }

    if (current === null) this.append(value)
    else {
      previous.next = newNode
      newNode.next = current
      this.size++
    }
  }
}

const myLinkedList = new LinkedList()

myLinkedList.prepend("I'm the first")
myLinkedList.append(987)
myLinkedList.append(654)
myLinkedList.append(321)
myLinkedList.append("I'm the last")
myLinkedList.insertAt(2, "I'm the 3rd (0 is 1)")
myLinkedList.toString()
