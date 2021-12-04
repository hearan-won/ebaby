package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.models.Seller;
import com.example.springtemplate.repositories.InventoryRestRepository;
import com.example.springtemplate.repositories.ProductRestRepository;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController

public class ProductDao {
    @Autowired
    ProductRestRepository productRepository;
    @Autowired
    InventoryRestRepository inventoryRepository;

    @GetMapping("/api/products/create/{category}/{price}/{name}/{inventoryId}")
    public Product createProduct(
            @PathVariable("category") String category,
            @PathVariable("price") Float price,
            @PathVariable("name") String name,
            @PathVariable("inventoryId") Integer inventoryId) {
        Inventory inventory = inventoryRepository.findInventoryById(inventoryId);
        Product product = new Product(category, price, name, inventoryId);
        return productRepository.save(product);
    }

    @GetMapping("/api/products/find")
    public List<Product> findAllProduct() {
        return (List<Product>) productRepository.findAll();
    }

    @GetMapping("/api/products/find/inventory/{inventoryId}")
    public List<Product> findProductByInventoryId(
            @PathVariable("inventoryId") Integer id) {
        return productRepository.findProductByInventoryId(id);
    }

    @GetMapping("/api/products/find/{productId}")
    public Product findProductById(
            @PathVariable("productId") Integer id) {
        return productRepository.findProductById(id);
    }

    @GetMapping("/api/products/delete/{productId}")
    public void deleteProduct(
            @PathVariable("productId") Integer id) {
        productRepository.deleteById(id);
    }

    @GetMapping("/api/products/update/{id}/{price}")
    public Product updatePriceByProductId(
            @PathVariable("id") Integer id,
            @PathVariable("price") Float price) {
        Product product = productRepository.findProductById(id);
        product.setPrice(price);
        return productRepository.save(product);
    }
}
