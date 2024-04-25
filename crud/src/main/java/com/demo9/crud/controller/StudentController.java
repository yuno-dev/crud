package com.demo9.crud.controller;

import com.demo9.crud.model.Student;
import com.demo9.crud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {


    @Autowired
    StudentService studentService;


    @GetMapping("/student")
    public String index(){

     return "Hello World";

    }

   @PostMapping("/store")
    public Student saveStudent(@RequestBody Student student){
        return studentService.create(student);
   }
}
