package com.campusswap.campus_swap_api.service;

import com.campusswap.campus_swap_api.model.Product;
import com.campusswap.campus_swap_api.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(Long id) {
        return productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }
}
