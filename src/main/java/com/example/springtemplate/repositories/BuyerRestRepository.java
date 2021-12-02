package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Buyer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BuyerRestRepository
        extends CrudRepository<Buyer,Integer> {
    @Query(value = "SELECT * FROM buyers",
            nativeQuery = true)
    public List<Buyer> findAllBuyers();

    @Query(value = "SELECT * FROM buyers WHERE id=:personId",
            nativeQuery = true)
    public Buyer findBuyerById(@Param("personId") Integer id);
}

