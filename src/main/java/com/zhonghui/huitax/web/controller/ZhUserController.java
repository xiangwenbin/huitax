package com.zhonghui.huitax.web.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhonghui.huitax.mapper.ZhUserMapper;
import com.zhonghui.huitax.model.ZhUser;
import com.zhonghui.huitax.service.ZhUserService;

@Controller
public class ZhUserController extends BaseController{

	 private Logger logger = Logger.getLogger(ZhUserController.class);
	 
    @Autowired
    private ZhUserService zhUserService;
	
    
    @RequestMapping("/getZhUserInfo")
    @ResponseBody
    public ZhUser getZkUserInfo() {
        ZhUser user = zhUserService.findZhUserInfoById(1);
        if(user!=null){
            System.out.println("user.getUsername():"+user.getUsername());
            logger.info("user.getNickname():"+user.getNickname());
        }
        return user;
    }
    
}
