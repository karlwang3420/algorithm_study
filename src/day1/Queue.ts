type Node<T> = {
    v: T;
    next: Node<T> | null;
};

export default class Queue<T> {
    public length: number;

    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node: Node<T> = { v: item, next: null };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    deque(): T | undefined {
        if (this.length === 0) return undefined;
        this.length--;
        const item = this.head;
        this.head = this.head?.next ?? null;

        if (this.length === 0) this.tail = null;

        return item!.v;
    }

    peek(): T | undefined {
        return this.head?.v;
    }
}
