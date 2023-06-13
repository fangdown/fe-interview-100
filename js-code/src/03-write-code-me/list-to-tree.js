/**
 * 数组转换成树
 */

const list = [
    { parentId: 0, id: 1, data: "1" },
    { parentId: 1, id: 2, data: "2-1" },
    { parentId: 1, id: 3, data: "2-2" },
    { parentId: 2, id: 4, data: "3-1" },
    { parentId: 3, id: 5, data: "3-2" },
    { parentId: 4, id: 6, data: "4-1" },
];

// map  存node   通过parentId 获取到node， 在children中存入当前
export const listToTree = (list) => {
    const map = new Map();
    let root;
    list.forEach((item) => {
        const { id, data, parentId } = item;
        const node = { id, data };
        map.set(id, node);
        if (parentId === 0) {
            root = node;
        }
        const parentNode = map.get(parentId);
        if (parentNode) {
            if (!parentNode.children) parentNode.children = [];
            parentNode.children.push(node);
        }
    });
    return root;
};

// 广度+ map key子 value 父
export const treeToList = (tree) => {
    const stack = [tree];
    const list = [];
    const map = new Map();
    while (stack.length) {
        const node = stack.shift();
        const parentNode = map.get(node);
        const parentId = parentNode?.id || 0;
        const { id, data, children } = node;
        const item = { id, data, parentId };
        list.push(item);
        children?.forEach((child) => {
            stack.push(child);
            map.set(child, node);
        });
    }
    return list;
};
const tree2 = listToTree(list);
console.log(tree2);
console.log(treeToList(tree2));
