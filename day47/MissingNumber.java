class Solution {
    public int missingNumber(int[] nums) {
        /*
        
        HashSet<Integer> set = new HashSet<Integer>();
        for(int i:nums){
            set.add(i);
        }
        for(int i=0;i<=nums.length;i++){
            if(!set.contains(i)){
                return i;
            }
        }
        return -1;
    }
    
    */
        int sum = 0;
        for(int i: nums){
            sum += i;        
        }
        int n = nums.length+1;
        return (n*(n-1)/2)-sum;
}
}
