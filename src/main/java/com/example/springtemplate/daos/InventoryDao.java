package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Seller;
import com.example.springtemplate.repositories.InventoryRestRepository;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class InventoryDao {
    @Autowired
    InventoryRestRepository inventoryRepository;
    @Autowired
    SellerRestRepository sellerRepository;

    @GetMapping("/api/inventorys/create/{sid}/{lo}")
    public Inventory createInventory(
            @PathVariable("sid") Integer sellerId,
            @PathVariable("lo") String location) {
        Inventory inventory = new Inventory(sellerId, location);
        return inventoryRepository.save(inventory);
    }

    @GetMapping("/api/inventorys/find")
    public List<Inventory> findAllInventory() {
        return (List<Inventory>) inventoryRepository.findAll();
    }

    @GetMapping("/api/inventorys/find/{sellerId}")
    public Inventory findInventoryBySellerId(
            @PathVariable("sellerId") Integer id) {
        return inventoryRepository.findInventoryBySellerId(id);
    }

    @GetMapping("/api/inventorys/delete/{inventoryId}")
    public void deleteInventory(
            @PathVariable("inventoryId") Integer id) {
        inventoryRepository.deleteById(id);
    }

    @GetMapping("/api/inventorys/update/{sid}/{location}")
    public Inventory updateLocationBySellerId(
            @PathVariable("sid") Integer id,
            @PathVariable("location") String location) {
        Inventory inventory = inventoryRepository.findInventoryBySellerId(id);
        inventory.setLocation(location);
        return inventoryRepository.save(inventory);
    }
}
