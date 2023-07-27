function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    let result: number[] = [];
    let i = 0;
    arr.forEach((el) => {
        if(fn(el, i)) {
            result.push(el);
        }
        i++;
    })
    return result;
};