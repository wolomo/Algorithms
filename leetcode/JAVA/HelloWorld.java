
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
        
        Utils utils = new Utils();
        
        
        //��1����
        int[] a = {1,2,3,5,6};
        int b = 5;
        int[] c = utils.twoSum(a, b);
        System.out.println(Arrays.toString(c));
        
        
        //��2����
        System.out.println(utils.judgeSqureSum(6));
        
        
        //��3����
        
        System.out.println(utils.reverseVowels("leetcode"));
        
        System.out.println(utils.validPalindrome("abca"));
    }
    

    

}


class Utils{
	
    /*
     * 
     * @param 
     * ��Ŀ�������������������ҳ���������ʹ���ǵĺ�Ϊ target��
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
     * ��Ŀ�������������������ҳ���������ʹ���ǵĺ�Ϊ target��
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
    		//charAt() �������ڷ���ָ�����������ַ���������ΧΪ�� 0 �� length() - 1��
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
    	//i��0��ʼ,j�����һλ��ʼ
    	for(int i=0,j=s.length()-1;i<j;i++,j--) {
    		//������s[i]������s[j]
    		if (s.charAt(i)!=s.charAt(j)) {
    			//�ж�s[i]��s[j-1]����s[i+1]��s[j]
				return isPalindrome(s,i,j-1)||isPalindrome(s,i+1,j);
			}
    	}
    	return true;
    }
    
    
    public boolean isPalindrome(String s,int i ,int j) {
    	while(i<j) {
    		//���s[i]������s[j]
    		if(s.charAt(i++)!=s.charAt(j--)){
    			return false;
    		}
    	}
    	return true;
    }
}


