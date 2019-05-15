package cn.jlyr.groupvip.test;

import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;

/**
 * @Classname AbstractBaseControllerTest
 * @Autor Administrator
 * @Date 2018/12/19 15:00
 * @Version 1.0
 **/
@RunWith(SpringJUnit4ClassRunner.class)
/** 注入相关的配置文件：可以写入多个配置文件 **/
@ContextConfiguration(locations={"classpath:applicationContext.xml"})
@WebAppConfiguration
public abstract class AbstractBaseControllerTest {

    protected MockMvc mockMvc;

}
