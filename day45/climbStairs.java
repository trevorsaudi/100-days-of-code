class Solution {
    public int climbStairs(int n) {
        int[]dp = new int [n+1]; //making an array to store the subproblems  
        dp[0]=1;                //we say n + 1 since the number of ways to climb 0 stairs is 1 way
        dp[1]=1;
        
        for(int i =2;i<=n;i++){
            dp[i] = dp[i-1]+dp[i-2];
        }
        
        return dp[n]
        
        
    }
}
