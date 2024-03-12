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

        // This method will display the elements of the linked list.
        this.display = function () {
            let result = "",
                temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next;
                if (temp != null) {
                    result += ", ";
                }
            }
            result += "";
            return result;
        };
    }
}

function removeNthLastNode(head, n) {
    let fast = head;
    let slow = head;

    // Move the fast pointer forward by n steps
    for (let i = 0; i < n; i++) {
        if (fast === null) {
            // If n is greater than the length of the list, return head
            return head;
        }
        fast = fast.next;
    }

    // If fast becomes null, it means the node to be removed is the head
    if (fast === null) {
        return head.next;
    }

    // Move fast to the end, maintaining the gap of n between fast and slow
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth last node by updating the next pointer of the node before it
    slow.next = slow.next.next;

    return head;
}

let list = new LinkedList();
list.createLinkedList([23,28,10,5,67,39,70,28]);
console.log(list.display()); // Display the initial list

removeNthLastNode(list.head, 2);

console.log(list.display()); // Display the list after removing the 2nd last node
