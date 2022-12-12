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
    @RequestMapping("/check")
    public String check(){

        return "check";
    }
    @RequestMapping("/check_book")
    public String check_book(){

        return "check_book";
    }
    @RequestMapping("/check_book_change")
    public String check_book_change(){

        return "check_book_change";
    }

    @RequestMapping("/subject_stuManage")
    public String subject_stuManage(){

        return "subject_stuManage";
    }

    @RequestMapping("/subject_stuManage2_1")
    public String subject_stuManage2_1(){

        return "subject_stuManage2_1";
    }

    @RequestMapping("/subject_stuManage2_3")
    public String subject_stuManage2_3(){

        return "subject_stuManage2_3";
    }

    @RequestMapping("/subject_stuManage3_1")
    public String subject_stuManage3_1(){

        return "subject_stuManage3_1";
    }

    @RequestMapping("/subject_stuManage3_5")
    public String subject_stuManage3_5(){

        return "subject_stuManage3_5";
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

    @RequestMapping("/subject_seat2_1")
    public String subject_seat2_1() {
        return "subject_seat2_1";
    }

    @RequestMapping("/subject_seat2_3")
    public String subject_seat2_3() {
        return "subject_seat2_3";
    }

    @RequestMapping("/subject_seat3_1")
    public String subject_seat3_1() {
        return "subject_seat3_1";
    }

    @RequestMapping("/subject_seat3_5")
    public String subject_seat3_5() {
        return "subject_seat3_5";
    }
}
