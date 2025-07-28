package com.campusswap.campus_swap_api.web.user;

import com.campusswap.campus_swap_api.domain.user.User;
import com.campusswap.campus_swap_api.repository.UserRepository;
import com.campusswap.campus_swap_api.service.user.UserProfileService;
import com.campusswap.campus_swap_api.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    private final UserProfileService userProfileService;

    @Autowired
    UserController(UserService pUserService, UserProfileService pUserProfileService) {
        userService = pUserService;
        userProfileService = pUserProfileService;
    }

    @GetMapping("")
    public ResponseEntity<User> getUser(@PathVariable Long uid) {
        return null;
    }

    @PostMapping("")
    public ResponseEntity<User> createUser(@PathVariable Long uid, @RequestBody User user) {
        return null;
    }

    @GetMapping("/{uid}")
    public ResponseEntity<User> getUserById(@PathVariable Long uid) {
        return null;
    }

    @PutMapping("/{uid}")
    public ResponseEntity<User> updateUserById(@PathVariable Long uid, @RequestBody User user) {
        return null;
    }

    @DeleteMapping("/{uid}")
    public ResponseEntity<User> deleteUserById(@PathVariable Long uid) {

        return null;
    }
}
