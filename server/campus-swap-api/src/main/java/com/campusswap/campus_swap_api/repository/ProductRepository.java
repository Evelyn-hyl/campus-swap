package com.campusswap.campus_swap_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.campusswap.campus_swap_api.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {}
