package com.zhonghui.huitax.web.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class UserCenterController extends BaseController {
	
	/**
	 * 个人信息页
	 * @param model
	 * @return
	 */
	@RequestMapping("/ucenter/profile")
	public String login(Model model) {
		this.setModelandView(model);
		return "pages/ucenter/profile";
	}
	/**
	 * 个人信息页
	 * @param model
	 * @return
	 */
	@RequestMapping("/ucenter/myEnterprise")
	public String myEnterprise(Model model) {
		this.setModelandView(model);
		return "pages/ucenter/myEnterprise";
	}
	
}
