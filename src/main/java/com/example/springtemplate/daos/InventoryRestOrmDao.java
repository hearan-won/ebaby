package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.repositories.InventoryRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class InventoryRestOrmDao {

    @Autowired
    InventoryRestRepository inventoryRepository;

    @PostMapping("/api/inventorys")
    public Inventory createInventory(@RequestBody Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @GetMapping("/api/inventorys")
    public List<Inventory> findAllInventorys() {
        return inventoryRepository.findAllInventorys();
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
        inventory.setSeller(inventoryUpdates.getSeller());
        inventory.setId(inventoryUpdates.getId());
        return inventoryRepository.save(inventory);
    }

    @DeleteMapping("/api/inventorys/{inventoryId}")
    public void deleteInventory(
            @PathVariable("inventoryId") Integer id) {
        inventoryRepository.deleteById(id);
    }
}