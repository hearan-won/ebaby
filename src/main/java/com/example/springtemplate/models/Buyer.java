
package com.example.springtemplate.models;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="buyers")
public class Buyer extends Person {
    private boolean VIP;

    @OneToMany(mappedBy="buyer")
    private List<Orders> orders;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isVIP() {
        return VIP;
    }

    public void setVIP(boolean VIP) {
        this.VIP = VIP;
    }

    public Buyer(String firstName, String lastName, String userName, String password, String email, String dateOfBirth, Boolean VIP) {
        super(firstName, lastName, userName, password, email, dateOfBirth);
        this.VIP = VIP;
    }

    public Buyer() {}

}
