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

    @RequestMapping(value = "/check", method = RequestMethod.GET)
    public String check(){
        return "check";
    }

    @RequestMapping(value = "/check_book", method = RequestMethod.GET)
    public String check_book(){
        return "check_book";
    }

    @RequestMapping(value = "/check_book_change", method = RequestMethod.GET)
    public String check_book_change(){
        return "check_book_change";
    }

    @RequestMapping(value = "/subject_stuManage", method = RequestMethod.GET)
    public String subject_stuManage(){
        return "subject_stuManage";
    }
    @RequestMapping(value = "class_seat", method = RequestMethod.GET)
    public String clsseat() { return "class_seat"; }

    @RequestMapping(value = "class_seat_edit", method = RequestMethod.GET)
    public String clsseatedit() { return "class_seat_edit"; }

    @RequestMapping(value = "subject_seat", method = RequestMethod.GET)
    public String sbjseat() { return "subject_seat"; }

    @RequestMapping(value = "subject_seat2_1", method = RequestMethod.GET)
    public String subject_seat2_1() { return "subject_seat2_1"; }

    @RequestMapping(value = "subject_seat2_3", method = RequestMethod.GET)
    public String subject_seat2_3() { return "subject_seat2_3"; }

    @RequestMapping(value = "subject_seat3_1", method = RequestMethod.GET)
    public String subject_seat3_1() { return "subject_seat3_1"; }

    @RequestMapping(value = "subject_seat3_5", method = RequestMethod.GET)
    public String subject_seat3_5() { return "subject_seat3_5"; }

    @RequestMapping(value = "/class_stuManage", method = RequestMethod.GET)
    public String class_stuManage(){
        return "class_stuManage";
    }
    @RequestMapping(value = "/class_stuManage1", method = RequestMethod.GET)
    public String class_stuManage1(){
        return "class_stuManage1";
    }

    @RequestMapping(value = "/class_stuManage2", method = RequestMethod.GET)
    public String class_stuManage2(){
        return "class_stuManage2";
    }

    @RequestMapping(value = "/class_seat_edit_gara", method = RequestMethod.GET)
    public String gara() { return "class_seat_edit_gara"; }

}
