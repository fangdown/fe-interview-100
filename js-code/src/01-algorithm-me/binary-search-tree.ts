/**
 * 二叉树遍历
 *
 */
export const tree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null,
        },
        right: {
            value: 4,
            left: null,
            right: null,
        },
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null,
        },
        right: {
            value: 8,
            left: null,
            right: null,
        },
    },
};

interface ITreeNode {
    value: number;
    left: ITreeNode | null;
    right: ITreeNode | null;
}
const arr: number[] = [];
export const preBinaryTree = (node: ITreeNode | null) => {
    if (!node) return;
    arr.push(node.value);
    preBinaryTree(node.left);
    preBinaryTree(node.right);
};

export const inBinaryTree = (node: ITreeNode | null) => {
    if (!node) return;
    inBinaryTree(node.left);
    arr.push(node.value);
    inBinaryTree(node.right);
};
export const nextBinaryTree = (node: ITreeNode | null) => {
    if (!node) return;
    nextBinaryTree(node.left);
    nextBinaryTree(node.right);
    arr.push(node.value);
};

//  获取第k个最小值
export const getValueForK = (node: ITreeNode, k: number) => {
    inBinaryTree(tree);
    console.log(arr[k - 1]);
    return arr[k - 1] || null;
};
// preBinaryTree(tree);
// inBinaryTree(tree);
// nextBinaryTree(tree);
getValueForK(tree, 3);
