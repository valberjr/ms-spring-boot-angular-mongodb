package com.example.springbootmongo.controller;

import com.example.springbootmongo.dto.School;
import com.example.springbootmongo.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/schools")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class SchoolController {

    private final SchoolService service;

    @PostMapping
    public School save(@RequestBody School school) {
        return service.create(school);
    }

    @GetMapping
    public List<School> getAllSchools() {
        return service.read();
    }

    @PutMapping
    public School update(@RequestBody School school) {
        return service.update(school);
    }

    @DeleteMapping("/{id}")
    public Map<String, String> delete(@PathVariable String id) {
        return service.delete(id);
    }
}
