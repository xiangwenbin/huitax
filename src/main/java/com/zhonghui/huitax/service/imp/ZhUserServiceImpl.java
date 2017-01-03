package com.zhonghui.huitax.service.imp;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhonghui.huitax.mapper.ZhUserMapper;
import com.zhonghui.huitax.model.ZhUser;
import com.zhonghui.huitax.service.ZhUserService;

@Service("zhUserService")
public class ZhUserServiceImpl implements ZhUserService {

	@Resource(name = "zhUserDao")
	private ZhUserMapper zhUserDao;
	
	@Override
	public int saveZhUser(ZhUser user) {
		return zhUserDao.save(user);
	}

	@Override
	public ZhUser findZhUserInfoById(int id) {
		return zhUserDao.findZhUserInfoById(id);
	}
	
	

}
