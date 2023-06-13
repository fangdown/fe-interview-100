/**
 * 深度遍历
 * 广度遍历
 */

export const dfs = (root, arr = []) => {
    arr.push(root.name);
    const children = root.children;
    if (!children.length) return;

    for (let i = 0; i < children.length; i++) {
        dfs(children[i], arr);
    }
    console.log(arr);
};

const dfs2 = (root) => {
    const stack = [root];
    const arr = [];
    while (stack.length) {
        const node = stack.shift();
        console.log("node", node);
        arr.push(node.name);
        if (node.children) {
            stack.unshift(...node.children);
        }
    }
    return arr;
};

const bfs = (root) => {
    const stack = [root];
    const arr = [];
    while (stack.length) {
        const node = stack.shift();
        console.log("node", node);
        arr.push(node.name);
        if (node.children) {
            stack.push(...node.children);
        }
    }
    return arr;
};
const treeData = {
    name: "root",
    children: [
        {
            name: "节点1",
            children: [
                {
                    name: "节点1-1",
                    children: [],
                },
                {
                    name: "节点1-2",
                    children: [
                        {
                            name: "节点1-2-1", // 目标节点
                            children: [
                                {
                                    name: "节点1-2-1-1",
                                    children: [],
                                },
                                {
                                    name: "节点1-2-1-2",
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "节点2",
            children: [
                {
                    name: "节点2-1",
                    children: [],
                },
            ],
        },
    ],
};

console.log(dfs(treeData));
console.log(dfs2(treeData));
console.log(bfs(treeData));
