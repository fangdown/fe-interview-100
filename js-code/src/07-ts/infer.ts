// infer 占位符

type Arr = [1, 2, 3, 4];
type ReverseArr<T extends any[]> = T extends [infer First, ...infer rest]
    ? [...ReverseArr<rest>, First]
    : T;
type RArr = ReverseArr<Arr>;
