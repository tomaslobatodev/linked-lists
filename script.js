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
      let removed = current.next.value
      current.next = null
      this.size--
      console.log(
        "\x1b[31m%s\x1b[0m",
        `the last node was removed ("${removed}")`
      )
    }
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

    console.log("\x1b[32m%s\x1b[0m", "This is the list:")
    console.log("\x1b[33m%s\x1b[0m", string)
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
    while (current !== null && currentIndex !== index - 1) {
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

  removeAt(index) {
    let current = this.first
    let currentIndex = 0
    while (current.next !== null && currentIndex !== index - 2) {
      current = current.next
      currentIndex++
    }

    console.log(
      "\x1b[31m%s\x1b[0m",
      `node removed: "${current.next.value}", index: ${index}`
    )
    current.next = current.next.next
    this.size--
  }
}

const myLinkedList = new LinkedList()

//append (add as last node)
myLinkedList.append(123)
myLinkedList.append(456)
myLinkedList.append(789)
myLinkedList.append("I'm the last node")
myLinkedList.append("No, I'm the last node")

//prepend (add as first node)
myLinkedList.prepend("I'm the first node")

//insert at (index, value)
myLinkedList.insertAt(3, "I'm the 3rd node")
myLinkedList.insertAt(6, "gimme a star pls")

//remove at (index)
myLinkedList.removeAt(6)

//pop (remove the last)
myLinkedList.pop()

myLinkedList.toString()
