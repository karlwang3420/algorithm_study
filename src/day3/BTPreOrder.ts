function walk(head: BinaryNode<number> | null, result: number[]): number[] {
    if (head == undefined) {
        return result;
    }

    // pre
    result.push(head.value);

    //recurrsion
    walk(head.left, result);

    walk(head.right, result);

    return result;

    // post
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
