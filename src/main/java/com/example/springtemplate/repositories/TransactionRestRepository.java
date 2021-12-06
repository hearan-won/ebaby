
package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Transaction;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TransactionRestRepository
        extends CrudRepository<Transaction,Integer> {
  @Query(value = "SELECT * FROM transactions",
          nativeQuery = true)
  public List<Transaction> findAllTransactions();

  @Query(value = "SELECT * FROM transactions WHERE transactions.id=:transactionId",
          nativeQuery = true)
  public Transaction findTransactionById(@Param("transactionId") Integer id);

  @Query(value = "SELECT * FROM transactions JOIN buyers WHERE transactions.id = buyers.id AND buyers.id=:buyerId",
          nativeQuery = true)
  public List<Transaction> findTransactionByBuyerId(@Param("buyerId") Integer id);

  @Query(value = "SELECT * FROM transactions JOIN buyers WHERE transactions.id = sellers.id AND sellers.id=:sellerId",
          nativeQuery = true)
  public List<Transaction> findTransactionBySellerId(@Param("sellerId") Integer id);
}

