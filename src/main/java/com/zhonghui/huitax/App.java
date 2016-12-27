package com.zhonghui.huitax;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;


/**
 * 开发环境下的启动服务器类
 * @author xwb
 * @since 2016年1月13日
 */
@EnableAutoConfiguration
@ComponentScan(basePackages={"com.zhonghui.huitax"})
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
