import java.util.*;



public class String_match{

    public static String String_equal(String a , String b){
       
    String x = a.toLowerCase();
    String y = b.toLowerCase();

    if( x==y ){
        System.out.println("Same words");
    }

    else{
        System.out.println("Different words");
    }

    return 0;

}
    public static void main(String[] args){
       
        Scanner sc = new Scanner(System.in);

        String a = sc.nextLine();
        String b = sc.nextLine();

        String_equal(a,b);

        return 0;


    }
}




arr[]= {2,{1,3} , 4 ,{2,5 } , 6{4,7}}