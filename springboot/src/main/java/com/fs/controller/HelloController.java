package com.fs.controller;
import com.fs.entity.fs;
import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {
    @ResponseBody
    @RequestMapping(value = "/hello",consumes = "application/json")
    @CrossOrigin("http://localhost:8080")
    public fs hello(@RequestBody String user){
        fs fFs=new fs("fs","666888qwe");
        System.out.println(user);
        return fFs;
    }
}
