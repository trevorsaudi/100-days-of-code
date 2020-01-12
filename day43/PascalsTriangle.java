class Solution {
    public List<List<Integer>> generate(int numRows) {
        
        
        
        List<List<Integer>> triangle = new ArrayList<>();//initializing the triangle,  list of lists
        
        if (numRows == 0) return triangle; //an algorithmic check
        
        List<Integer> first_row = new ArrayList<>();
        first_row.add(1); //the first 1 in the list of lists
        triangle.add(first_row);
            
        
        for(int i=1; i<numRows;i++){
            
            List<Integer> prev_row = triangle.get(i-1); //initializing the previous row
            List<Integer> row = new ArrayList<>();//initializing the current row
                
            row.add(1);//every 1 in the beginning of the list
            
            for (int j=1; j<i;j++){
                
                row.add(prev_row.get(j-1)+prev_row.get(j));
                
            }
                row.add(1);         //the last one in the list
                triangle.add(row); //adding the list to the triangle
        }
        
        return triangle;
        
    }
}
