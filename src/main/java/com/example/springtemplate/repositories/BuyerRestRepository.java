
package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Buyer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BuyerRestRepository
        extends CrudRepository<Buyer,Integer> {
    @Query(value = "SELECT * FROM persons JOIN buyers WHERE persons.id = buyers.id",
            nativeQuery = true)
    public List<Buyer> findAllBuyers();

    @Query(value = "SELECT * FROM persons JOIN buyers WHERE persons.id = buyers.id AND buyers.id=:buyerId",
            nativeQuery = true)
    public Buyer findBuyerById(@Param("buyerId") Integer id);
}


