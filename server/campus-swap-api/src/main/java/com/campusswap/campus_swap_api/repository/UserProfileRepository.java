package com.campusswap.campus_swap_api.repository;

import com.campusswap.campus_swap_api.domain.user.User;
import com.campusswap.campus_swap_api.domain.user.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
    Optional<UserProfile> findById(Long Id);
    Optional<UserProfile> findByUser(User user);
}
