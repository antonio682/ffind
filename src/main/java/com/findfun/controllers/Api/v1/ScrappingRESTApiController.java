package com.findfun.controllers.Api.v1;

import com.findfun.services.ScrappingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by eric6 on 29/04/2017.
 */
@RestController
public class ScrappingRESTApiController {

    @Autowired
    ScrappingService scrappingService;

    @RequestMapping("/Scrapping")
    public String doScrap(){
        return  scrappingService.scrapTest();
    }
}
