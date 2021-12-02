package com.example.springtemplate.daos;

import com.example.springtemplate.models.Person;
import com.example.springtemplate.repositories.PersonRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonOrmDao {
    @Autowired
    PersonRestRepository personRepository;


    @GetMapping("/api/persons/create/{fn}/{ln}/{un}/{pw}")
    public Person createPerson(
            @PathVariable("fn") String first,
            @PathVariable("ln") String last,
            @PathVariable("un") String uname,
            @PathVariable("pw") String pass) {
        Person person = new Person(first, last, uname, pass, null, null);
        return personRepository.save(person);
    }

    @GetMapping("/api/persons/find")
    public List<Person> findAllPerson() {
        return personRepository.findAllPersons(); }

    @GetMapping("/api/persons/find/{personId}")
    public Person findPersonById(@PathVariable("personId") Integer id)  {
        return personRepository.findPersonById(id);
    }

    @GetMapping("/api/persons/delete/{personId}")
    public void deletePerson(
        @PathVariable("personId") Integer id) {
        personRepository.deleteById(id);
    }

    @GetMapping("/api/persons/update/{personId}/{password}")
    public Person updateUser(
            @PathVariable("personId") Integer id,
            @PathVariable("password") String newPass) {
        Person person = personRepository.findPersonById(id);
        person.setPassword(newPass);
        return personRepository.save(person);
    }

}
