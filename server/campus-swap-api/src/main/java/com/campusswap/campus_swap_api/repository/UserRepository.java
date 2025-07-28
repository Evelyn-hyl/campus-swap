package com.campusswap.campus_swap_api.repository;

import com.campusswap.campus_swap_api.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}