package com.example.springtemplate.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;
@Entity
@Table(name="sellers")
public class Seller extends Person {
    private String companyName;

    @OneToOne(mappedBy = "seller")
    private Inventory inventory;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Seller(String firstName, String lastName, String userName, String password, String email, String dateOfBirth, String companyName) {
        super(firstName, lastName, userName, password, email, dateOfBirth);
        this.companyName = companyName;
    }

    public Seller() {}
}
