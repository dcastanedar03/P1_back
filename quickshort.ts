function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const izq: number[] = [];
    const der: number[] = [];
    const medio: number[] = [];

    for (const num of arr) {
        if (num < pivot) {
            izq.push(num);
        } else if (num > pivot) {
            der.push(num);
        } else {
            medio.push(num);
        }
    }

    return quickSort(izq).concat(medio, quickSort(der));
}

const prueba = [3, 45, 52, 3, 4, 1,99,9 ,1];
console.log(quickSort(prueba));