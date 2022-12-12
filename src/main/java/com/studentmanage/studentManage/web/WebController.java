package com.studentmanage.studentManage.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {

    @RequestMapping("/")
    public String main(){

        return "login";
    }

    @RequestMapping("/index")
    public String index(){

        return "index";
    }

    @RequestMapping("/class_stuManage1")
    public String class_stuManage1(){

        return "class_stuManage1";
    }

    @RequestMapping("/class_stuManage2")
    public String class_stuManage2(){

        return "class_stuManage2";
    }
}
