package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="buyers")
public class Buyer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer personId;
    private boolean VIP;

    public Buyer() {

    }

    public Buyer( Integer personId, boolean VIP) {
        this.personId = personId;
        this.VIP = VIP;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPersonId() {
        return personId;
    }

    public void setPersonId(Integer personId) {
        this.personId = personId;
    }

    public boolean isVIP() {
        return VIP;
    }

    public void setVIP(boolean VIP) {
        this.VIP = VIP;
    }
}
