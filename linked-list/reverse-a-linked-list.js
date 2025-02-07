class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    size() {
        let size = 0;
        let current = this.head
        while (current !== null) {
            size++;
            current = current.next
        }
        return size;
    }

    add(val) {
        let current = this.head;
        const node = new Node(val)

        if (this.head === null) {
            this.head = node
        } else {
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }
}


const list = new LinkedList()

list.add(5);
list.add(6);
list.add(7);
list.add(8);
console.log(list);


