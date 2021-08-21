## 回溯法的模板

## 推荐文章

- https://leetcode-cn.com/problems/subsets/solution/hui-su-si-xiang-tuan-mie-pai-lie-zu-he-zi-ji-wen-t/

## 经典题目

- 78. 子集
- 46. 全排列
- 47
- 77. 组合

- 39. 组合总和
- 40. 组合总和 II
- 216. 组合总和 III
```python
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```
