function isArray(arr) {
    return arr instanceof Array;
}
// 插入排序
export const InsertSort = arr => {
    if (!isArray(arr)) {
        throw new Error('参数必须为Array')
    }
    let _arr = arr.slice();
    for (let i = 1, len = arr.length; i <= len; i++) {
        let index = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[index] < arr[j]) {
                [arr[index], arr[j]] = [arr[j], arr[index]];
                // 进入这个step时 该元素前的所有元素均已排序完成
                index = j;
            } else {
                break;
            }
        }
    };
    return arr;
};

// 选择排序
export const SelectSort = _arr => {
    let arr = _arr.slice()
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        let min = i;
        for (let j = min; j < len - 1; j++) {
            if (arr[min] > arr[j + 1]) {
                // 记录最小值的索引
                min = j + 1;
            } else {
                break;
            }
        };
        [arr[min], arr[i]] = [arr[i], arr[min]];
    };
    return arr;
};

// 冒泡排序
export const BubbleSort = arr => {
    let _arr = arr.slice();
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = 1; j < len - i; j++) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
        }
    };
    return arr;
}

// 快速排序
export const QuickSort = arr => {
    if (arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2),
        midNum = arr.splice(midIndex, 1)[0],
        left = [],
        right = [];
    arr.forEach(v => {
        v >= midNum ? right.push(v) : left.push(v)
    });
    return [...QuickSort(left), midNum, ...QuickSort(right)]
}

// 归并排序
let i = 0;
export const MergeSort = arr => {
    if (arr.length <= 1) return arr;


    const mergeFn = (left, right) => {
        let tmp = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                tmp.push(left.shift());
            } else {
                tmp.push(right.shift())
            }
        };
        return [...tmp, ...left, ...right];
    };



    let midIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIndex),
        right = arr.slice(midIndex);
    return mergeFn(MergeSort(left), MergeSort(right))
}

var bubbleSort = arr => {
    let _arr = arr.slice();
    for (let i = 0, len = _arr.length; i < len - 1; i++) {
        for (let j = 1; j < len - i; j++) {
            if (_arr[j] < _arr[j - 1]) {
                [_arr[j], _arr[j - 1]] = [_arr[j - 1], _arr[j]];
                console.log(` ------------------ ${_arr}`)
            }
        };
        console.log(`第${i + 1}次循环结束`)
    };
    return _arr;
}

var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(arr))