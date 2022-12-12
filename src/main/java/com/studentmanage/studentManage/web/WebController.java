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
    @RequestMapping("/check_book_change.")
    public String check_book_change1(){

        return "check_book_change1";
    }

    @RequestMapping("/subject_stuManage")
    public String subject_stuManage(){

        return "subject_stuManage";
    }

    @RequestMapping("/subject_stuManage2_1")
    public String subject_stuManage2_1(){

        return "subject_stuManage2_1";
    }

    @RequestMapping("/subject_stuManage2_1_")
    public String subject_stuManage2_1_change(){

        return "subject_stuManage2_1_change";
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

    @RequestMapping("/class_stuManage")
    public String class_stuManage() {
        return "class_stuManage";
    }
    @RequestMapping("/class_stuManage1")
    public String class_stuManage1() {
        return "class_stuManage1";
    }

    @RequestMapping("/class_stuManage2")
    public String class_stuManage2() {
        return "class_stuManage2";
    }

    @RequestMapping("/class_seat_edit_gara")
    public String gara() { return "class_seat_edit_gara"; }

    @RequestMapping("/class_seat_")
    public String class_seat_change() {
        return "class_seat_change";
    }
}
