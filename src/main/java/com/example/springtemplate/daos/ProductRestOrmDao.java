package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.repositories.InventoryRestRepository;
import com.example.springtemplate.repositories.ProductRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductRestOrmDao {
  @Autowired
  ProductRestRepository productRepository;

  @Autowired
  InventoryRestRepository inventoryRepository;

  @PostMapping("/api/products")
  public Product createProduct(@RequestBody Product product) {
    Inventory inventory = product.getInventory();
    Inventory newInventory = inventoryRepository.findInventoryById(inventory.getId());
    Product newProduct = new Product(product.getCategory().toString(), product.getPrice(), product.getName(), newInventory);
    return productRepository.save(newProduct);
  }

  @GetMapping("/api/products")
  public List<Product> findAllProducts() {
    List<Product> products = productRepository.findAllProducts();
    for (Product prod : products) {
      System.out.println(products);
    }
    return products;
  }

  @GetMapping("/api/products/{productId}")
  public Product findProductById(
          @PathVariable("productId") Integer id) {
    return productRepository.findProductById(id);
  }

  @GetMapping("/api/products/inventory/{inventoryId}")
  public List<Product> findProductByInventoryId(
          @PathVariable("inventoryId") Integer id) {
    return productRepository.findProductByInventoryId(id);

  }

  @PutMapping("/api/products/{productId}")
  public Product updateProduct(
          @PathVariable("productId") Integer id,
          @RequestBody Product productUpdates) {
    Product product = productRepository.findProductById(id);
    product.setCategory(productUpdates.getCategory());
    product.setPrice(productUpdates.getPrice());
    product.setName(productUpdates.getName());
    //product.setInventoryId(productUpdates.getInventoryId());
    product.setInventory(productUpdates.getInventory());
    return productRepository.save(product);
  }

  @DeleteMapping("/api/products/{productId}")
  public void deleteProductById(
          @PathVariable("productId") Integer id) {
    productRepository.deleteProductById(id);
  }
}