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
}
