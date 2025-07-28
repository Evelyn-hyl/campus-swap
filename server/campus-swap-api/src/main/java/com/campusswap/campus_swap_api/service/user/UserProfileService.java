package com.campusswap.campus_swap_api.service.user;

import com.campusswap.campus_swap_api.repository.UserProfileRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserProfileService {

    private final UserProfileRepository userProfileRepository;

    @Autowired
    public UserProfileService(UserProfileRepository pUserProfileRepository) {
        userProfileRepository = pUserProfileRepository;
    }
}
