package com.example.springbootmongo.service;

import com.example.springbootmongo.dto.School;
import com.example.springbootmongo.repository.SchoolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SchoolServiceImpl implements SchoolService {

    private final SchoolRepository repository;

    @Override
    public School create(School school) {
        return repository.insert(school);
    }

    @Override
    public List<School> read() {
        return repository.findAll();
    }

    @Override
    public School update(School school) {
        return repository.save(school);
    }

    @Override
    public Map<String, String> delete(String id) {
        // Total count of data before delete
        var beforeDelete = repository.count();

        repository.deleteById(id);

        // Total count of data after delete
        var afterDelete = repository.count();

        var messageValue = beforeDelete == afterDelete ? "Something went wrong!" : "Record deleted";

        Map<String, String> deleteMap = new HashMap<>();
        deleteMap.put("message", messageValue);

        return deleteMap;
    }
}
