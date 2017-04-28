package com.findfun.services;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.io.IOException;
/**
 * Created by eric6 on 29/04/2017.
 */
@Service
public class ScrappingService {
    Document doc;
    String title = null;

    public String scrapTest(){
        try {
            doc = Jsoup.connect("http://ticketmaster.com/").get();
            title = doc.title();
            title = doc.body().toString();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return title;
    }
}

