function walk(head: BinaryNode<number> | null, result: number[]): number[] {
    if (head == undefined) {
        return result;
    }

    // pre

    //recurrsion
    walk(head.left, result);

    walk(head.right, result);

    // post
    result.push(head.value);
    return result;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
