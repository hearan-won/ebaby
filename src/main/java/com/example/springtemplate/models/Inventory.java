package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name ="inventorys")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "sid", referencedColumnName = "id")
    private Seller seller;
    private String location;

    @OneToMany(mappedBy="inventory")
    private List<Product> products;

    public Inventory(){}

    public Inventory(Seller seller, String location) {
        this.seller = seller;
        this.location = location;
    }

    public Inventory(Integer id, Seller seller, String location) {
        this.id = id;
        this.seller = seller;
        this.location = location;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
