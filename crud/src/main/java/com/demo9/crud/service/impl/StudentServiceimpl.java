package com.demo9.crud.service.impl;

import com.demo9.crud.model.Student;
import com.demo9.crud.repository.StudentRepository;
import com.demo9.crud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceimpl implements StudentService {
    @Autowired
    StudentRepository studentRepository;
    @Override
    public Student create(Student student) {
        return studentRepository.save(student);
    }
}
