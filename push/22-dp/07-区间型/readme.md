- 给定一个序列/字符串，进行一些操作
- 最后一步会将序列/字符串去头/去尾
- 剩下的会是一个区间 [i, j]
- 状态自然定义为 f[i][j]，表示面对子序列[i,...,j]时的最优性质

```C++
class Solution {
    public int longestPalindromeSubseq(String s) {
        int n = s.length();
        int[][] f = new int[n][n];
        for (int i = n - 1; i >= 0; i--) {
            f[i][i] = 1;
            for (int j = i + 1; j < n; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    f[i][j] = f[i + 1][j - 1] + 2;
                } else {
                    f[i][j] = Math.max(f[i + 1][j], f[i][j - 1]);
                }
            }
        }
        return f[0][n - 1];
    }
}
```
