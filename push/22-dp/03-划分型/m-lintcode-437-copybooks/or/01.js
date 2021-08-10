/*
437 · 书籍复印

描述
给定n本书，第i本书有[i]页。有k个人来抄这些书。
这些书排成一行，每个人都可以索取连续一段的书。
例如，一个复印机可以连续地将书从第i册复制到第j册，但是他不能复制第1册、第2册和第4册（没有第3册）。
他们在同一时间开始抄书，每抄一页书都要花1分钟。
为了让最慢的复印机能在最早的时间完成书的分配，最好的策略是什么？

请返回最慢复印机花费的最短时间。

书籍页数总和小于等于2147483647

样例
样例 1:

输入: pages = [3, 2, 4], k = 2
输出: 5
解释: 第一个人复印前两本书, 耗时 5 分钟. 第二个人复印第三本书, 耗时 4 分钟.
样例 2:

输入: pages = [3, 2, 4], k = 3
输出: 4
解释: 三个人各复印一本书.
挑战
时间复杂度 O(nk)

 */
/**
 * 划分型：
 * 如果 后面的都是一个人复印 total
 * f[k][n] k 个人抄 n 本书
 * f[k][i] = Math.min(f[k][i], Math.max(f[k - 1][j], sum));
 * @param pages: an array of integers
 * @param k: An integer
 * @return: an integer
 */
function copyBooks(pages, k) {
  // write your code here
}
