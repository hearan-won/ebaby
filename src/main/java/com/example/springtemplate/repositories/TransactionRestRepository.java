//
//package com.example.springtemplate.repositories;
//
//import com.example.springtemplate.models.Buyer;
//import com.example.springtemplate.models.Transaction;
//
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//
//import java.util.List;
//
//public interface TransactionRestRepository
//        extends CrudRepository<Transaction,Integer> {
//  @Query(value = "SELECT * FROM persons JOIN buyers WHERE persons.id = buyers.id",
//          nativeQuery = true)
//  public List<Buyer> findAllTransactions();
//
//  @Query(value = "SELECT * FROM persons JOIN buyers WHERE persons.id = buyers.id AND buyers.id=:buyerId",
//          nativeQuery = true)
//  public Buyer findBuyerById(@Param("buyerId") Integer id);
//}
//
