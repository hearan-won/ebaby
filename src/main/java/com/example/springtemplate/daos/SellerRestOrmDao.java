package com.example.springtemplate.daos;

import com.example.springtemplate.models.Seller;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SellerRestOrmDao {
    @Autowired
    SellerRestRepository sellerRepository;

    @PostMapping("/api/sellers")
    public Seller createSeller(@RequestBody Seller seller) {
        return sellerRepository.save(seller);
    }

    @GetMapping("/api/sellers")
    public List<Seller> findAllSellers() {
        return sellerRepository.findAllSellers();
    }

    @GetMapping("/api/sellers/{sellerId}")
    public Seller findSellerById(
            @PathVariable("sellerId") Integer id) {
        return sellerRepository.findSellerById(id);
    }

    @PutMapping("/api/sellers/{sellerId}")
    public Seller updateSeller(
            @PathVariable("sellerId") Integer id,
            @RequestBody Seller sellerUpdates) {
        Seller seller = sellerRepository.findSellerById(id);
        seller.setFirstName(sellerUpdates.getFirstName());
        seller.setLastName(sellerUpdates.getLastName());
        seller.setPersonName(sellerUpdates.getPersonName());
        seller.setPassword(sellerUpdates.getPassword());
        seller.setDateOfBirth(sellerUpdates.getDateOfBirth());
        return sellerRepository.save(seller);
    }

    @DeleteMapping("/api/sellers/{sellerId}")
    public void deleteSeller(
            @PathVariable("sellerId") Integer id) {
        sellerRepository.deleteById(id);
    }
}