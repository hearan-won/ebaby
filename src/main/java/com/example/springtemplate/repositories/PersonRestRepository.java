package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PersonRestRepository
        extends CrudRepository<Person, Integer> {


    @Query(value = "SELECT * FROM persons",
            nativeQuery = true)
    public List<Person> findAllPersons();


    @Query(value = "SELECT * FROM persons WHERE id=:personId",
            nativeQuery = true)
    public Person findPersonById(@Param("personId") Integer id);
}