package com.zhonghui.huitax.web.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class LoginController extends BaseController {
	
	/**
	 * 登录页
	 * @param model
	 * @return
	 */
	@RequestMapping("/login")
	public String login(Model model) {
		this.setModelandView(model);
		return "pages/login";
	}
	
	/**
	 * 注册页
	 * @param model
	 * @return
	 */
	@RequestMapping("/register")
	public String register(Model model) {
		this.setModelandView(model);
		return "pages/register";
	}
	
}
