package com.zhonghui.huitax.mapper;


import java.util.List;

import org.springframework.stereotype.Repository;

import com.zhonghui.huitax.model.ZhUser;


@Repository("zhUserDao")
public interface ZhUserMapper {
	public ZhUser findZhUserInfoById(int id);
	public int save(ZhUser user);
	public List<ZhUser> queryAll();  
	//public 
}
