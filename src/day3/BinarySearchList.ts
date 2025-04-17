function binarySearch(array: number[], needle: number): boolean {
    if (array.length == 0) {
        return false;
    }
    if (array.length == 1) {
        return array[0] == needle;
    }

    let midIndex = Math.floor(array.length / 2);
    if (needle == array[midIndex]) {
        return true;
    }
    if (needle > array[midIndex]) {
        return binarySearch(array.slice(midIndex + 1), needle);
    }
    return binarySearch(array.slice(0, midIndex), needle);
}

export default function bs_list(haystack: number[], needle: number): boolean {
    return binarySearch(haystack, needle);
}
