class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}


class LL{
    constructor(node = null){
        this.head = node;
    }

    

}

const node = new Node(5);
const node2 = new Node(20);
const node3 = new Node(200);

node.next = node2
node2.next = node3
const linkedList = new LL(node);
console.log(JSON.stringify(linkedList))
