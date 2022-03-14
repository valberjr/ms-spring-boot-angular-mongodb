package com.example.springbootmongo.repository;

import com.example.springbootmongo.dto.School;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolRepository extends MongoRepository<School, String> {
}
