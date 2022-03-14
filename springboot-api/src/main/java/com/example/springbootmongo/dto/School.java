package com.example.springbootmongo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class School {

    @Id
    private String id;
    private String name;
    private int establishmentYear;
    private String[] availableCourses;
    private int strength;
}
