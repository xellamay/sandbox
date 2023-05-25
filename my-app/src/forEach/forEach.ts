let arr = [1, 2, 3, 4, 5];

type Callback = (value: unknown, index: number, array: unknown[]) => void;

export const forEach = (
  array:unknown[],
  callback: Callback
) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

forEach(arr, (item)=> console.log(item))
