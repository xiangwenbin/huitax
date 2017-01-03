package com.zhonghui.huitax;

import org.springframework.beans.factory.annotation.Autowired;

import com.zhonghui.huitax.mapper.ZhUserMapper;
import com.zhonghui.huitax.model.ZhUser;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest
    extends TestCase
{
	
	 @Autowired  
	 private ZhUserMapper mapper;  
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
//    public static Test suite()
//    {
//        return new TestSuite( AppTst.class );
//    }

    /**
     * Rigourous Test :-)
     */
    public void testApp()
    {
        assertTrue( true );
    }
    
    
    public void testInsert(){  
        ZhUser user = new ZhUser();  
       
       /// user = mapper.findZhUserInfo();  
        System.out.println("插入用户信息"+user.getUsername());  
    }  
}
