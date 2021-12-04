package com.example.springtemplate.models;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name ="orders")
public class Orders {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;


  private int quantity;
  private int productId;
  private int bid;



//  @OneToMany(mappedBy="orders")
//  private List<Product> products;

  @ManyToOne
  @JoinColumn(name="bid", nullable=false, insertable=false, updatable = false)
  private Buyer buyer;

  public Orders(int quantity) {

    this.quantity = quantity;
  }

  public Orders() {

  }


  public Orders(int bid, int quantity, int productId) {
    this.bid = bid;

  public Orders(Buyer buyer, int quantity, int productId) {
    this.buyer = buyer;
    this.buyerId = this.buyer.id;

    this.quantity = quantity;
    this.productId = productId;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public int getBuyerId() {
    return buyerId;
  }

  public void setBuyerId(int buyerId) {
    this.buyerId = buyerId;
  }

  public int getProductId() {
    return productId;
  }

  public void setProductId(int productId) {
    this.productId = productId;
  }

  public Integer getQuantity(){
    return this.quantity;
  }

  public void setQuantity(Integer newQuant){
    this.quantity = newQuant;
  }


  public int getBid() {
    return bid;
  }

  public void setBid(int bid) {
    this.bid = bid;
  }

  //  public List<Product> getProducts() {
//    return products;
//  }
//
//  public void setProducts(List<Product> products) {
//    this.products = products;
//  }

//  public Buyer getBuyer() {
//    return buyer;
//  }
//
//  public void setBuyer(Buyer buyer) {
//    this.buyer = buyer;
//  }

}
