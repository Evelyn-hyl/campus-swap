package com.campusswap.campus_swap_api.repository;

import com.campusswap.campus_swap_api.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByAuthProvider(User.AuthProvider authProvider);
    Optional<User> findByProviderIdAndAuthProvider(String providerId, User.AuthProvider authProvider);
}