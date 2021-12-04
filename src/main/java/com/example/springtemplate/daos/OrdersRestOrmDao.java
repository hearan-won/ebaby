package com.example.springtemplate.daos;

import com.example.springtemplate.models.Orders;
import com.example.springtemplate.repositories.OrdersRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OrdersRestOrmDao {
    @Autowired
    OrdersRestRepository orderRepository;

    @PostMapping("/api/orders")
    public Orders createOrders(@RequestBody Orders orders) {

        return orderRepository.save(orders);
    }

    @GetMapping("/api/orders")
    public List<Orders> findAllOrders() {
        List<Orders> allOrders = orderRepository.findAllOrders();
        return allOrders;
    }

    @GetMapping("/api/orders/{orderId}")
    public Orders findOrdersById(
            @PathVariable("orderId") Integer id) {
        return orderRepository.findOrdersById(id);
    }


    @PutMapping("/api/orders/{orderId}")
    public Orders updateOrder(
            @PathVariable("orderId") Integer id,
            @RequestBody Orders orderUpdates) {
        Orders order = orderRepository.findOrdersById(id);
        order.setQuantity(orderUpdates.getQuantity());
        return orderRepository.save(order);
    }


    @DeleteMapping("/api/orders/{orderId}")
    public void deleteBuyer(
            @PathVariable("orderId") Integer id) {
        orderRepository.deleteById(id);
    }
}