> 参考： https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/tree
>
- 前序遍历： 144
- 中序遍历： 94 https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/shou-hua-tu-jie-yong-zhan-mo-ni-zhong-xu-bian-li-z/

前、中、后序遍历都是基于DFS，节点的访问顺序如上图所示，每个节点有三个不同的驻留阶段，即每个节点会被经过三次：

在递归它的左子树之前。
在递归完它的左子树之后，在递归它的右子树之前。
在递归完它的右子树之后
