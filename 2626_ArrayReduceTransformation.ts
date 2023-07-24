type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    nums.forEach((element) => init = fn(init, element));
    return init;
};