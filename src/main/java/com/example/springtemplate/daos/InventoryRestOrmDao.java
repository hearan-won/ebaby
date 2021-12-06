package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Seller;
import com.example.springtemplate.repositories.InventoryRestRepository;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class InventoryRestOrmDao {
    @Autowired
    InventoryRestRepository inventoryRepository;

    @Autowired
    SellerRestRepository sellerRepository;

    @PostMapping("/api/inventorys")
    public Inventory createInventory(@RequestBody Inventory inventory) {
        Inventory invent = new Inventory(inventory.getId(), inventory.getSellerId(), inventory.getLocation());
        Inventory savedInventory = inventoryRepository.save(invent);
        return savedInventory;
    }

    @GetMapping("/api/inventorys")
    public List<Inventory> findAllInventorys() {
        List<Inventory> inventories = inventoryRepository.findAllInventorys();
        return inventories;
    }

    @GetMapping("/api/inventorys/{inventoryId}")
    public Inventory findInventoryById(
            @PathVariable("inventoryId") Integer id) {
        return inventoryRepository.findInventoryById(id);
    }

    @GetMapping("/api/inventorys/seller/{sellerId}")
    public Inventory findInventoryBySellerId(
            @PathVariable("sellerId") Integer id) {
        return inventoryRepository.findInventoryBySellerId(id);

    }

    @PutMapping("/api/inventorys/{inventoryId}")
    public Inventory updateInventory(
            @PathVariable("inventoryId") Integer id,
            @RequestBody Inventory inventoryUpdates) {
        Inventory inventory = inventoryRepository.findInventoryById(id);
        inventory.setLocation(inventoryUpdates.getLocation());
        inventory.setSellerId(inventoryUpdates.getSellerId());
        inventory.setId(inventoryUpdates.getId());
        return inventoryRepository.save(inventory);
    }

    @DeleteMapping("/api/inventorys/{inventoryId}")
    public void deleteInventoryById(
            @PathVariable("inventoryId") Integer id) {
        inventoryRepository.deleteById(id);
    }
}