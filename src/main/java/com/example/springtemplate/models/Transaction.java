//package com.example.springtemplate.models;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name ="transactions")
//public class Transaction {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//    private Integer buyerId;
//    private Integer sellerId;
//    private String transactionDate;
//    private Float amount;
//
//    public Transaction(){}
//
//    public Transaction(Integer id, Integer buyerId, Integer sellerId, String transactionDate, Float amount) {
//        this.id = id;
//        this.buyerId = buyerId;
//        this.sellerId = sellerId;
//        this.transactionDate = transactionDate;
//        this.amount = amount;
//    }
//
//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public Integer getBuyerId() {
//        return buyerId;
//    }
//
//    public void setBuyerId(Integer buyerId) {
//        this.buyerId = buyerId;
//    }
//
//    public Integer getSellerId() {
//        return sellerId;
//    }
//
//    public void setSellerId(Integer sellerId) {
//        this.sellerId = sellerId;
//    }
//
//    public String getTransactionDate() {
//        return transactionDate;
//    }
//
//    public void setTransactionDate(String transactionDate) {
//        this.transactionDate = transactionDate;
//    }
//
//    public Float getAmount() {
//        return amount;
//    }
//
//    public void setAmount(Float amount) {
//        this.amount = amount;
//    }
//}
