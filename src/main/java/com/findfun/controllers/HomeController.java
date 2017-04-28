package com.findfun.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by eric6 on 28/04/2017.
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() { return "index.html" ; }

}
