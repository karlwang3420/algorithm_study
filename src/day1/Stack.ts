type Node<T> = {
    v: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node: Node<T> = {
            v: item,
            next: undefined,
        };
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;
        this.length--;
        const out = this.head;
        this.head = this.head.next;
        return out!.v;
    }
    peek(): T | undefined {
        return this.head?.v;
    }
}
