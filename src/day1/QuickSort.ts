function quickSort(arr: number[], lo: number, hi: number) {
    if (lo >= hi) {
        return;
    }

    const pIndex = weakSort(arr, lo, hi);

    quickSort(arr, lo, pIndex - 1);
    quickSort(arr, pIndex + 1, hi);
}

function weakSort(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let index = lo - 1;

    const swap = (i: number, j: number) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            index++;
            swap(i, index);
        }
    }
    index++;
    swap(hi, index);

    return index;
}

export default function quick_sort(arr: number[]): void {
    quickSort(arr, 0, arr.length - 1);
}
