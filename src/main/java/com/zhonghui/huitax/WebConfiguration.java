/**
 */
package com.zhonghui.huitax;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.BeanNameViewResolver;
import org.springframework.web.servlet.view.ContentNegotiatingViewResolver;

/**
 * 引入 spring mvc xml配置文件
 */

@Configuration
@ComponentScan
//@ImportResource({ "classpath:config/mvc-config.xml" })
@Import(value = WebMvcConfiguration.class)
public class WebConfiguration {
	
//	@Bean
//	public ContentNegotiatingViewResolver viewResolver(){
//		ContentNegotiatingViewResolver contentNegotiatingViewResolver = new ContentNegotiatingViewResolver();
//		return contentNegotiatingViewResolver;
//	}
//	@Bean 
//	public List<ViewResolver> viewResolvers(){
//		List<ViewResolver> list = new ArrayList<ViewResolver>(0);
//		list.add(new BeanNameViewResolver());
//		
//		return list;
//	}
	public ServletRegistrationBean servletRegistrationBean(){
		
		return new ServletRegistrationBean();
	}

}
