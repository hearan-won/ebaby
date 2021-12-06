package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name ="inventorys")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "sid", referencedColumnName = "id", nullable=false, insertable=false, updatable = false)
    private Seller seller;

    private int sid;
    private String location;

    @OneToMany(mappedBy="inventory")
    private List<Product> products;

    public Inventory(){}

    public Inventory(int sid, String location) {
        this.sid = sid;
        this.location = location;
    }

    public Inventory(Integer id, int sid, String location) {
        this.id = id;
        this.sid = sid;
        this.location = location;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getSellerId() {
        return sid;
    }

    public void setSellerId(int sid) {
        this.sid = sid;
    }
}
