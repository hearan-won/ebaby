package com.example.springtemplate.models;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name ="orders")
public class Orders {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private Integer quantity;
  private Integer productId;
  private Integer buyerId;

//  @OneToMany(mappedBy="orders")
//  private List<Product> products;

  @ManyToOne
  @JoinColumn(name="bid", nullable=false)
  private Buyer buyer;

  public Orders(int quantity) {

    this.quantity = quantity;
  }

  public Orders() {

  }

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
}
