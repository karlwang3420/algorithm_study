function walk(head: BinaryNode<number> | null, result: number[]): number[] {
    if (head == undefined) {
        return result;
    }

    // pre

    //recurrsion
    walk(head.left, result);
    result.push(head.value);

    walk(head.right, result);

    return result;

    // post
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
