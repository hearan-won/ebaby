//package com.example.springtemplate.daos;
//
//import com.example.springtemplate.models.Seller;
//import com.example.springtemplate.repositories.SellerRestRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//
//import java.util.List;
//
//public class SellerOrmDao {
//    @Autowired
//    SellerRestRepository sellerRepository;
//    public Seller createSeller() { return null; }
//
//    @GetMapping("/orm/sellers/find")
//    public List<Seller> findAllSeller() {
//        return sellerRepository.findAllSellers(); }
//    public Seller findSellerById(Integer id) { return null; }
//    public Integer deleteSeller(Integer id) { return null; }
//    public Integer updateSeller() { return null; }
//}
