export default class MinHeap {
    public length: number;
    private list: number[];

    constructor() {
        this.length = 0;
        this.list = [];
    }

    insert(value: number): void {
        this.list.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length == 0) return -1;
        const head = this.list[0];
        this.list[0] = this.list.pop()!;
        this.length--;
        this.heapifyDown(0);
        return head!;
    }

    private up(index: number) {
        return Math.floor((index - 1) / 2);
    }

    private left(index: number) {
        return index * 2 + 1;
    }
    private right(index: number) {
        return index * 2 + 2;
    }

    private heapifyUp(index: number) {
        if (index == 0) return;
        const p = this.up(index);
        const parentV = this.list[this.up(index)];
        const v = this.list[index];
        if (v < parentV) {
            this.list[p] = v;
            this.list[index] = parentV;
        }
        this.heapifyUp(p);
    }

    private heapifyDown(index: number) {
        const v = this.list[index];
        if (v == undefined) return;
        const leftV = this.list[this.left(index)];
        const rightV = this.list[this.right(index)];
        if (leftV != undefined && rightV != undefined) {
            if (Math.min(leftV, rightV) == leftV && leftV < v) {
                // go left
                this.list[this.left(index)] = v;
                this.list[index] = leftV;
                this.heapifyDown(this.left(index));
            } else if (Math.min(leftV, rightV) == rightV && rightV < v) {
                // go right
                this.list[this.right(index)] = v;
                this.list[index] = rightV;
                this.heapifyDown(this.right(index));
            }
        } else if (leftV != undefined) {
            // go left
            this.list[this.left(index)] = v;
            this.list[index] = leftV;
            this.heapifyDown(this.left(index));
        }
    }
}
