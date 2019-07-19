
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
        
        Utils utils = new Utils();
        
        
        //法1测试
        int[] a = {1,2,3,5,6};
        int b = 5;
        int[] c = utils.twoSum(a, b);
        System.out.println(Arrays.toString(c));
        
        
        //法2测试
        System.out.println(utils.judgeSqureSum(6));
        
        
        //法3测试
        
        System.out.println(utils.reverseVowels("leetcode"));
        
        System.out.println(utils.validPalindrome("abca"));
    }
    

    

}


class Utils{
	
    /*
     * 
     * @param 
     * 题目描述：在有序数组中找出两个数，使它们的和为 target。
     * 
     * 
     * */
    public int[] twoSum(int[] numbers, int target) {
        int i = 0, j = numbers.length - 1;
        while (i < j) {
            int sum = numbers[i] + numbers[j];
            if (sum == target) {
                return new int[]{i + 1, j + 1};
            } else if (sum < target) {
                i++;
            } else {
                j--;
            }
        }
        return null;
    }
	
    /*
     * 
     * @param 
     * 题目描述：在有序数组中找出两个数，使它们的和为 target。
     * 
     * 
     * */
    
    public boolean judgeSqureSum(int target) {   	
    	int i =0,j=(int)Math.sqrt(target);   	
    	while(i<j) {	
    		int sum  = i*i+j*j;
    		if (sum ==target) {
				return true;
			}else if(sum<target) {
				i++;
			}else{
				j--;
			}   		
    	}   	
    	return false;
    }
    
    
    
    public String  reverseVowels(String s) {
    	
    	final HashSet<Character> vowels = new HashSet<>(
    	        Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'));
    	 int i = 0, j = s.length() - 1;
    	    char[] result = new char[s.length()];
    	    while (i <= j) {
    		//charAt() 方法用于返回指定索引处的字符。索引范围为从 0 到 length() - 1。
	    	char ci = s.charAt(i);
	        char cj = s.charAt(j);
	        if (!vowels.contains(ci)) {
	            result[i++] = ci;
	        } else if (!vowels.contains(cj)) {
	            result[j--] = cj;
	        } else {
	            result[i++] = cj;
	            result[j--] = ci;
	        }
    	}
    	
		return new String(result);
	}
    
	
    public boolean validPalindrome(String s) {
    	//i从0开始,j从最后一位开始
    	for(int i=0,j=s.length()-1;i<j;i++,j--) {
    		//如果如果s[i]不等于s[j]
    		if (s.charAt(i)!=s.charAt(j)) {
    			//判断s[i]和s[j-1]或者s[i+1]和s[j]
				return isPalindrome(s,i,j-1)||isPalindrome(s,i+1,j);
			}
    	}
    	return true;
    }
    
    
    public boolean isPalindrome(String s,int i ,int j) {
    	while(i<j) {
    		//如果s[i]不等于s[j]
    		if(s.charAt(i++)!=s.charAt(j--)){
    			return false;
    		}
    	}
    	return true;
    }
}


