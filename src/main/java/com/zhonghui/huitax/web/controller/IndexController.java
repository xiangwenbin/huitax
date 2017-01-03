package com.zhonghui.huitax.web.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhonghui.huitax.mapper.ZhUserMapper;
import com.zhonghui.huitax.model.ZhUser;
import com.zhonghui.huitax.service.ZhUserService;


@Controller
@RequestMapping("/index")
public class IndexController {
	
//	@Autowired
//	private PeopleService peopleService;
	@Resource
	private ZhUserService zhUserService;
	
	
	@RequestMapping("")
	public String index(Model  model){
		ZhUser user = zhUserService.findZhUserInfoById(1);
		System.out.println("插入用户信息"+user.getUsername());  
		
		ZhUser u = new ZhUser();
		u.setUsername("hello");
		u.setLoginname("hello");
		u.setNickname("hello");
		u.setMobile("hello");
		u.setLoginpassword("hello");
		u.setUrl("hello");
		u.setCreatetime(System.currentTimeMillis()/1000);
		u.setUpdatetime(System.currentTimeMillis()/1000);
		int i = zhUserService.saveZhUser(u);
		System.out.println("i::::"+i);
		return "pages/index";
	}


}
