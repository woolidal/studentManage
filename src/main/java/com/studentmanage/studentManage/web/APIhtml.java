package com.studentmanage.studentManage.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class APIhtml {
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(){
        return "login";
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index(){
        return "index";
    }

    @RequestMapping(value = "class_seat", method = RequestMethod.GET)
    public String clsseat() { return "class_seat"; }

    @RequestMapping(value = "class_seat_edit", method = RequestMethod.GET)
    public String clsseatedit() { return "class_seat_edit"; }

}
