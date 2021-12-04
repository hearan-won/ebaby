package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRestRepository extends CrudRepository<Product, Integer> {

    @Query(value = "SELECT * FROM products",
            nativeQuery = true)
    public List<Product> findAllProducts();
    @Query(value = "SELECT * FROM products WHERE products.inventory_id=:inventoryId",
            nativeQuery = true)
    public List<Product> findProductByInventoryId(@Param("inventoryId") Integer id);

    @Query(value = "SELECT * FROM products WHERE products.id=:productId",
            nativeQuery = true)
    public Product findProductById(@Param("productId") Integer id);

    @Query(value = "DELETE FROM products WHERE products.id =:id);",
            nativeQuery = true)
    public void deleteProductById(@Param("id") Integer id);

}
