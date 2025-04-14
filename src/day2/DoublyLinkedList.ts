type Node<T> = {
    val: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = {
            val: item,
        };
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx >= this.length) {
            throw Error("Index out of bounds");
        }
        const node: Node<T> = {
            val: item,
        };
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === length) {
            this.append(item);
            return;
        }

        this.length++;
        let cur = this.head!;
        for (let i = 0; i < idx; i++) {
            cur = cur.next!;
        }
        const prevNode = cur.prev!;
        const nextNode = cur;
        prevNode.next = node;
        nextNode.prev = node;
        node.next = nextNode;
        node.prev = prevNode;
    }

    append(item: T): void {
        const node: Node<T> = {
            val: item,
        };
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {
        if (idx >= this.length) {
            throw Error("Index out of bounds");
        }
        let cur = this.head!;
        for (let i = 0; i < idx; i++) {
            cur = cur.next!;
        }
        return cur.val;
    }
    removeAt(idx: number): T | undefined {
        if (!this.head || idx > this.length - 1) {
            return undefined;
        }
        this.length--;
        if (idx == 0) {
            const cur = this.head;
            this.head = this.head.next;

            return cur.val;
        }
        if (idx == this.length) {
            const cur = this.tail!;
            this.tail = this.tail!.prev;

            return cur.val;
        }
        let cur = this.head;
        for (let i = 0; i < idx; i++) {
            cur = cur.next!;
        }
        cur.prev!.next = cur.next;
        cur.next!.prev = cur.prev;

        return cur.val;
    }
}
