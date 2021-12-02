//package com.example.springtemplate.daos;
//
//import com.example.springtemplate.models.Buyer;
//import com.example.springtemplate.repositories.TransactionRestRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//
//public class TransactionOrmDao {
//    @Autowired
//    TransactionRestRepository transactionRepository;
//    @GetMapping("/api/buyers/create/{fn}/{ln}/{un}/{pw}/{email}/{vip}/{dob}")
//    public Buyer createBuyer(
//            @PathVariable("fn")String firstName,
//            @PathVariable("ln")String lastName,
//            @PathVariable("un")String userName,
//            @PathVariable("pw")String password,
//            @PathVariable("email")String email,
//            @PathVariable("vip")boolean VIP,
//            @PathVariable("dob")String dateOfBirth){
//        Buyer buyer = new Buyer(firstName, lastName, userName, password, email, dateOfBirth, VIP);
//        return transactionRepository.save(buyer);
//    }
//
//    @GetMapping("/api/buyers/find")
//    public List<Buyer> findAllBuyers() {
//        return transactionRepository.findAllBuyers();
//    }
//
//    @GetMapping("/api/buyers/find/{personId}")
//    public Buyer findBuyerById(
//            @PathVariable("personId") Integer id) {
//        return transactionRepository.findBuyerById(id);
//    }
//
//    @GetMapping("/api/buyers/delete/{personId}")
//    public void deleteBuyer(
//            @PathVariable("personId") Integer id) {
//        transactionRepository.deleteById(id);
//    }
//
//    @GetMapping("/api/buyers/update/{personId}/{vip}")
//    public Buyer updateBuyerById(
//            @PathVariable("personId") Integer id,
//            @PathVariable("vip") boolean vipStatus) {
//        Buyer buyer = transactionRepository.findBuyerById(id);
//        buyer.setVIP(vipStatus);
//        return transactionRepository.save(buyer);
//    }
//}
