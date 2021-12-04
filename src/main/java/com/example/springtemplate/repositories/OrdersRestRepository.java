package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Orders;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrdersRestRepository extends CrudRepository<Orders, Integer> {

  @Query(value = "SELECT * FROM orders WHERE orders.buyer_id=:buyerId",
          nativeQuery = true)
  public List<Orders> findOrdersByBuyerId(@Param("buyerId") Integer id);

  @Query(value = "SELECT * FROM orders WHERE orders.id=:id",
          nativeQuery = true)
  public Orders findOrdersById(@Param("id") Integer id);

  @Query (value = "SELECT * FROM orders WHERE orders.product_id=:productId",
          nativeQuery = true)
  public Orders findOrdersByProductId(@Param("productId") Integer id);

  @Query (value = "SELECT * FROM orders", nativeQuery = true)
  public List<Orders> findAllOrders();

}