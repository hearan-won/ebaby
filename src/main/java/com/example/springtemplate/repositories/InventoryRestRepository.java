package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Buyer;
import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Seller;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InventoryRestRepository extends CrudRepository<Inventory, Integer> {
    @Query(value = "SELECT * FROM inventorys",
            nativeQuery = true)
    public List<Inventory> findAllInventorys();

    @Query(value = "SELECT * FROM inventorys WHERE inventorys.sid=:sellerId",
            nativeQuery = true)
    public Inventory findInventoryBySellerId(@Param("sellerId") Integer id);

    @Query(value = "SELECT * FROM inventorys WHERE inventorys.id=:id",
            nativeQuery = true)
    public Inventory findInventoryById(@Param("id") Integer id);

    @Query(value = "DELETE FROM inventorys WHERE inventorys.id =:id);",
            nativeQuery = true)
    public void deleteInventoryById(@Param("id") Integer id);
}
