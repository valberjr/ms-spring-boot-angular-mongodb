package com.example.springbootmongo.service;

import com.example.springbootmongo.dto.School;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface SchoolService {

    School create(School school);

    List<School> read();

    School update(School school);

    Map<String, String> delete(String id);
}
