import { check } from "prettier";

class Node<T> {
    value: T;
    children: Node<T>[];
    isWord: boolean;
    constructor(v: T) {
        this.value = v;
        this.children = [];
        this.isWord = false;
    }

    getChild(v: T) {
        let node: Node<T> | undefined = this.children.find(
            (node: Node<T>) => node.value === v,
        );
        if (node == undefined) {
            node = new Node(v);

            this.children.push(node);
        }
        return node;
    }

    removeChild(v: T) {
        // remove last node from parent
        this.children = this.children.filter((n) => n.value !== v);
    }
}

export default class Trie {
    head: Node<string>;

    constructor() {
        this.head = new Node("");
    }

    print(node: Node<string> = this.head) {
        console.log(this.findAll("", node, []));
    }

    insert(item: string): void {
        let cur = this.head;
        for (const c of item) {
            cur = cur.getChild(c);
        }
        cur.isWord = true;
    }

    delete(item: string): void {
        const nodes = [];
        let cur = this.head;
        for (const c of item) {
            cur = cur.getChild(c);
            nodes.push(cur);
        }
        cur.isWord = false;
        while (true) {
            const lastNode = nodes.pop()!;
            if (lastNode.children.length != 0 || lastNode.isWord) {
                break;
            }
            // remove last node from parent
            nodes[nodes.length - 1].removeChild(lastNode.value);
        }
    }
    find(partial: string): string[] {
        let cur = this.head;
        for (const c of partial) {
            const child = cur.children.find((n) => n.value === c);
            if (!child) {
                return [];
            }
            cur = child;
        }
        return this.findAll(partial.slice(0, -1), cur, []);
    }

    private findAll(partial: string, node: Node<string>, found: string[]) {
        if (node.isWord) {
            partial = partial + node.value;
            found.push(partial);
            for (const child of node.children) {
                this.findAll(partial, child, found);
            }
        } else {
            for (const child of node.children) {
                this.findAll(partial + node.value, child, found);
            }
        }
        return found;
    }
}
