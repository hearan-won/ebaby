package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Seller;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SellerRestRepository
        extends CrudRepository<Seller, Integer> {

    @Query(value = "SELECT * FROM persons JOIN sellers WHERE persons.id = sellers.id",
            nativeQuery = true)
    public List<Seller> findAllSellers();

    @Query(value = "SELECT * FROM persons JOIN sellers WHERE persons.id = sellers.id AND sellers.id=:sellerId",
            nativeQuery = true)
    public Seller findSellerById(@Param("sellerId") Integer id);
}

