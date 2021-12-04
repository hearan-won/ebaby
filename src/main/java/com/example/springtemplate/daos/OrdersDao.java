package com.example.springtemplate.daos;

import com.example.springtemplate.models.Buyer;
import com.example.springtemplate.models.Orders;
import com.example.springtemplate.repositories.BuyerRestRepository;
import com.example.springtemplate.repositories.OrdersRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrdersDao {

  @Autowired
  OrdersRestRepository ordersRepository;
  @Autowired
  BuyerRestRepository buyerRepository;

  @GetMapping("/api/orders/create/{bid}/{quantity}/{productId}")
  public Orders createOrder(
          @PathVariable("bid") Integer buyerId,
          @PathVariable("quantity") Integer quantity,
          @PathVariable("productId") Integer productId) {

    Buyer buyer = buyerRepository.findBuyerById(buyerId);
    Orders order = new Orders(buyerId, quantity, productId);
    return ordersRepository.save(order);
  }

  @GetMapping("/api/orders/find")
  public List<Orders> findAllOrders() {
    return (List<Orders>) ordersRepository.findAll();
  }

  @GetMapping("/api/orders/find/{buyerId}")
  public List<Orders> findOrdersByBuyerId(
          @PathVariable("buyerId") Integer id) {
    return ordersRepository.findOrdersByBuyerId(id);
  }

  @GetMapping("/api/orders/delete/{orderId}")
  public void deleteOrder(
          @PathVariable("orderId") Integer id) {
    ordersRepository.deleteById(id);
  }

  @GetMapping("/api/orders/update/{quantity}/{productId}")
  public Orders updateProductQuantityInOrder(
          @PathVariable("quantity") Integer quantity,
          @PathVariable("productId") Integer productId) {
    Orders orders = ordersRepository.findOrdersByProductId(productId);
    orders.setQuantity(quantity);
    return ordersRepository.save(orders);
  }

}
