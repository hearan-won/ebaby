package com.example.springtemplate.daos;

import com.example.springtemplate.models.Seller;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SellerOrmDao {
    @Autowired
    SellerRestRepository sellerRepository;
    @GetMapping("/api/sellers/create/{fn}/{ln}/{un}/{pw}")
    public Seller createSeller(
            @PathVariable("fn") String first,
            @PathVariable("ln") String last,
            @PathVariable("un") String uname,
            @PathVariable("pw") String pass) {
        Seller seller = new Seller(first, last, uname, pass, "", "", "");
        return sellerRepository.save(seller);
    }

    @GetMapping("/api/sellers/find")
    public List<Seller> findAllSeller() {
        return sellerRepository.findAllSellers(); }

    @GetMapping("/api/sellers/find/{personId}")
    public Seller findSellerById(
            @PathVariable("personId") Integer id) {
        return sellerRepository.findSellerById(id);
    }

    @GetMapping("/api/sellers/delete/{personId}")
    public void deleteSeller(
            @PathVariable("personId") Integer id) {
        sellerRepository.deleteById(id);
    }

    @GetMapping("/api/sellers/update/{personId}/{companyName}")
    public Seller updateSellerById(
            @PathVariable("personId") Integer id,
            @PathVariable("companyName") String companyName) {
        Seller seller = sellerRepository.findSellerById(id);
        seller.setCompanyName(companyName);
        return sellerRepository.save(seller);
    }

    @GetMapping("/api/sellers/update/{personId}/{password}")
    public Seller updatePassword(
            @PathVariable("personId") Integer id,
            @PathVariable("password") String newPass) {
        Seller seller = sellerRepository.findSellerById(id);
        seller.setPassword(newPass);
        return sellerRepository.save(seller);
    }
}