class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;

        // insertNodeAtHead method will insert a LinkedListNode at head
        // of a linked list.
        this.insertNodeAtHead = function (node) {
            if (this.head != null) {
                node.next = this.head;
                this.head = node;
            } else this.head = node;
        };

        // createLinkedList method will create the linked list using the
        // given integer array with the help of InsertAthead method.
        this.createLinkedList = function (list) {
            list.reverse().forEach((element) => {
                let newNode = new LinkedListNode(element);
                this.insertNodeAtHead(newNode);
            });
        };

        // returns the number of nodes in the linked list
        this.getLength = function (head) {
            let length = 0,
                temp = head;
            while (temp != null) {
                length++;
                temp = temp.next;
            }
            return length;
        }

        // returns the node at the specified position(index) of the linked list
        this.getNode = function (head, pos) {
            if (pos !== -1) {
                let p = 0;
                let ptr = head;
                while (p < pos) {
                    ptr = ptr.next;
                    p += 1;
                }
                return ptr;
            }
        }

        // This method will display the elements of the linked list.
        this.display = function () {
            let result = "",
                temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next;
                if (temp != null) {
                    result += "-> ";
                }
            }
            result += "";
            return result;
        };
    }
}

function detectCycle(head) {

    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if (fastPointer === slowPointer) {
            return true
        }
    }

    return false;
}

let list = new LinkedList();
list.createLinkedList([2, 4, 6, 8, 10]);

const requiredNode = list.getNode(list.head, 1)
const lastNode = list.getNode(list.head, list.getLength(list.head) - 1)

lastNode.next = requiredNode

console.log(detectCycle(list.head))

