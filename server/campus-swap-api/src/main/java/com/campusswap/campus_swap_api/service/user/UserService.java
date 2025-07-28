package com.campusswap.campus_swap_api.service.user;

import com.campusswap.campus_swap_api.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository pUserRepository) {
        userRepository = pUserRepository;
    }
}