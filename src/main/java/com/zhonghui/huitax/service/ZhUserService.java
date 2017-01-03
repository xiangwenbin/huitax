package com.zhonghui.huitax.service;

import com.zhonghui.huitax.model.ZhUser;

public interface ZhUserService {
	
	
    public int saveZhUser(ZhUser user);
    
    public ZhUser findZhUserInfoById(int id);
}
