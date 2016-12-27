/**
 */
package com.zhonghui.huitax;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * 
 * @author xwb
 * @since 2016年1月13日
 */

@Configuration
@ComponentScan
@EnableCaching
public class CaceConfiguration {

//	@Bean
//	public CacheManager cacheManager() {
//		return new ConcurrentMapCacheManager();
//	}
}
