package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name ="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private Category category;

    private float price;
    private String name;
    private Integer inventoryId;

    @ManyToOne
    @JoinColumn(name="inventoryId", nullable=false, insertable=false, updatable = false)
    private Inventory inventory;

    public int getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(int inventoryId) {
        this.inventoryId = inventoryId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Product(String category, float price, String name, int inventoryId) {
        this.category = Category.convertString(category);
        this.price = price;
        this.name = name;
        this.inventoryId = inventoryId;
    }

    public Product() {}


}
