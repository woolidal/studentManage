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

    @RequestMapping("/class_seat")
    public String clsseat(){
        return "class_seat";
    }

    @RequestMapping("/class_seat_edit")
    public String clsseatedit(){
        return "class_seat_edit";
    }

    @RequestMapping("/subject_seat")
    public String sbjseat() { return "subject_seat"; }
}
