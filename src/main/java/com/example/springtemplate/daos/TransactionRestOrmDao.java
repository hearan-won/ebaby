package com.example.springtemplate.daos;
import com.example.springtemplate.models.Transaction;
import com.example.springtemplate.repositories.BuyerRestRepository;
import com.example.springtemplate.repositories.SellerRestRepository;
import com.example.springtemplate.repositories.TransactionRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TransactionRestOrmDao {

  @Autowired
  TransactionRestRepository transactionRepository;

  @Autowired
  BuyerRestRepository buyerRepository;

  @Autowired
  SellerRestRepository sellerRepository;

  @PostMapping("/api/transactions")
  public Transaction createTransaction(@RequestBody Transaction transaction) {
    //Transaction newTransaction = new Transaction(transaction.getBuyerId(), transaction.getSellerId(), transaction.getTransactionDate(), transaction.getAmount());
    return transactionRepository.save(transaction);
  }

  @GetMapping("/api/transactions")
  public List<Transaction> findAllTransactions() {
    List<Transaction> transactions = transactionRepository.findAllTransactions();
    return transactions;
  }

  @GetMapping("/api/transactions/{transactionId}")
  public Transaction findTransactionById(
          @PathVariable("transactionId") Integer id) {
    return transactionRepository.findTransactionById(id);
  }

  @GetMapping("/api/transactions/buyer/{buyerId}")
  public List<Transaction> findTransactionByBuyerId(
          @PathVariable("buyerId") Integer id) {
    return transactionRepository.findTransactionByBuyerId(id);

  }

  @GetMapping("/api/transactions/seller/{sellerId}")
  public List<Transaction> findTransactionBySellerId(
          @PathVariable("sellerId") Integer id) {
    return transactionRepository.findTransactionBySellerId(id);

  }

  @PutMapping("/api/transactions/{transactionId}")
  public Transaction updateTransaction(
          @PathVariable("transactionId") Integer id,
          @RequestBody Transaction transactionUpdates) {
    Transaction transaction = transactionRepository.findTransactionById(id);
    transaction.setBuyerId(transactionUpdates.getBuyerId());
    transaction.setSellerId(transactionUpdates.getSellerId());
    transaction.setTransactionDate(transactionUpdates.getTransactionDate());
    transaction.setAmount(transactionUpdates.getAmount());
    return transactionRepository.save(transaction);
  }

  @DeleteMapping("/api/transactions/{transactionId}")
  public void deleteTransactionById(
          @PathVariable("transactionId") Integer id) {
    transactionRepository.deleteById(id);
  }
}
