package com.campusswap.campus_swap_api.config;

import com.campusswap.campus_swap_api.model.Product;
import com.campusswap.campus_swap_api.repository.ProductRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {
    private final ProductRepository productRepository;

    public DataLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (productRepository.count() == 0) {
            ObjectMapper mapper = new ObjectMapper();
            TypeReference<List<Product>> typeRef = new TypeReference<>() {};
            InputStream inputStream = new ClassPathResource("data/products.json").getInputStream();

            List<Product> products = mapper.readValue(inputStream, typeRef);
            productRepository.saveAll(products);

            System.out.println("Mock products loaded: " + products.size());
        }
    }
    
}
