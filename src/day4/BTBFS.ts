export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = [head];
    while (queue.length > 0) {
        const cur = queue.shift() as typeof head;

        if (needle === cur.value) {
            return true;
        }

        if (cur.left) {
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }
    return false;
}
