package com.campusswap.campus_swap_api.controller;
import com.campusswap.campus_swap_api.model.Product;
import com.campusswap.campus_swap_api.service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // Allow your React app
public class ProductResource {

    private final ProductService productService;
    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.getProduct(id);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }
}
