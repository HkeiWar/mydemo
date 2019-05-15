package cn.jlyr.groupvip.test;

import cn.jlyr.groupvip.controller.AdminController;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import javax.annotation.Resource;

/**
 * @Classname AdminControllerTest
 * @Autor Administrator
 * @Date 2019/5/15 15:40
 * @Version 1.0
 **/
public class AdminControllerTest extends AbstractBaseControllerTest {
    @Resource
    private AdminController adminController;

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(adminController).build();
    }

    @Test
    public void adminListTest() throws Exception {
        MultiValueMap<String, String> params = new LinkedMultiValueMap();
        String apiName = "/api/groupvip/admin/adminlist";
        params.set("hotelinfoid", "7991543031");
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get(apiName).params(params));
        resultActions.andDo(MockMvcResultHandlers.print()).andExpect(MockMvcResultMatchers.status().isOk());
    }


}
