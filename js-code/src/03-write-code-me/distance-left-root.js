// 叶子节点到根节点距离

export function getDistanceByLeafToRoot(root, leaf) {
    if (leaf === root) return 0;
    const children = root.children;
    if (!children?.length) return -1;
    for (let i = 0; i < children.length; i++) {
        const distance = getDistanceByLeafToRoot(children[i], leaf);
        if (distance >= 0) return distance + 1;
    }
    return -1;
}

const box = document.getElementById("box");
const leaf = document.getElementById("leaf");
console.log(getDistanceByLeafToRoot(box, leaf));
