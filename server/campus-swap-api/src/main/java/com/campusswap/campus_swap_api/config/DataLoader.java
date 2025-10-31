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

            // Read JSON into an intermediate DTO because the JSON `images` array is an array of strings,
            // while our JPA model uses a List<ProductImage> objects. We need to convert strings to entities.
            TypeReference<List<ProductJsonDTO>> typeRef = new TypeReference<>() {};
            InputStream inputStream = new ClassPathResource("data/products.json").getInputStream();

            List<ProductJsonDTO> productJsonList = mapper.readValue(inputStream, typeRef);

            List<Product> products = productJsonList.stream().map(pj -> {
                Product product = new Product();
                product.setName(pj.name);
                product.setPrice(pj.price);
                product.setCondition(pj.condition);
                product.setBrand(pj.brand);
                product.setDescription(pj.description);

                // convert image URLs to ProductImage entities and link back to product
                if (pj.images != null && !pj.images.isEmpty()) {
                    List<com.campusswap.campus_swap_api.model.ProductImage> imgs = pj.images.stream().map(url -> {
                        com.campusswap.campus_swap_api.model.ProductImage pi = new com.campusswap.campus_swap_api.model.ProductImage();
                        pi.setImageUrl(url);
                        pi.setProduct(product);
                        return pi;
                    }).toList();
                    product.setImages(imgs);
                }

                return product;
            }).toList();

            productRepository.saveAll(products);

            System.out.println("Mock products loaded: " + products.size());
        }
    }

    // Intermediate DTO matching the JSON structure in resources/data/products.json
    private static class ProductJsonDTO {
        public String name;
        public String price;
        public String condition;
        public String brand;
        public List<String> images;
        public String description;
    }
    
}
