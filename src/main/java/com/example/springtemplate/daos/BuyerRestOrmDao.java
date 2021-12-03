package com.example.springtemplate.daos;

import com.example.springtemplate.models.Buyer;
import com.example.springtemplate.repositories.BuyerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BuyerRestOrmDao {
    @Autowired
    BuyerRestRepository buyerRepository;

    @PostMapping("/api/buyers")
    public Buyer createBuyer(@RequestBody Buyer buyer) {
        return buyerRepository.save(buyer);
    }

    @GetMapping("/api/buyers")
    public List<Buyer> findAllBuyers() {
        return buyerRepository.findAllBuyers();
    }

    @GetMapping("/api/buyers/{buyerId}")
    public Buyer findBuyerById(
            @PathVariable("buyerId") Integer id) {
        return buyerRepository.findBuyerById(id);
    }

    @PutMapping("/api/buyers/{buyerId}")
    public Buyer updateBuyer(
            @PathVariable("buyerId") Integer id,
            @RequestBody Buyer buyerUpdates) {
        Buyer buyer = buyerRepository.findBuyerById(id);
        buyer.setVIP(buyerUpdates.isVIP());
        buyer.setFirstName(buyerUpdates.getFirstName());
        buyer.setLastName(buyerUpdates.getLastName());
        buyer.setPersonName(buyerUpdates.getPersonName());
        buyer.setPassword(buyerUpdates.getPassword());
        buyer.setDateOfBirth(buyerUpdates.getDateOfBirth());
        buyer.setVIP(buyerUpdates.isVIP());
        return buyerRepository.save(buyer);
    }

    @DeleteMapping("/api/buyers/{buyerId}")
    public void deleteBuyer(
            @PathVariable("buyerId") Integer id) {
        buyerRepository.deleteById(id);
    }
}