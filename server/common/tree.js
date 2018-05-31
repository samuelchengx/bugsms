let is_parent = (parent, child) => {
  if (child.no.indexOf(parent.no) === 0) { return true }

}

let is_brother = (node1, node2) => node1.length === node2.length
let get_node = (array, index) => {
  let node = array[index]
  node.items = []
  let i = index + 1
  while (i < array.length) {
    let current = array[i]

    if (is_parent(node, current)) {
      // 当前子结点

      let result = get_node(array, i)
      node.items.push(result.node)
      i = result.index
      continue
    } else if (is_brother(node, current)) {
      // 兄弟结点
      return {
        node: node,
        index: i,
      }
    } else {
      // 祖先结点
      return {
        node: node,
        index: i + 1,
      }
    }
  }
  return {
    node: node,
    index: i,
  }
}
/** */

let make_tree = (items) => {
  let tree = []
  let index = 0
  while (index < items.length) {
    let result = get_node(items, index)
    // console.log(result);
    tree.push(result.node)
    index = result.index
  }
  return tree
}
exports.treeNode = make_tree
