package com.campusswap.campus_swap_api.web.user;

import com.campusswap.campus_swap_api.domain.user.User;
import com.campusswap.campus_swap_api.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;

    UserController(UserRepository repository) {
        userRepository = repository;
    }

    @GetMapping("")
    public ResponseEntity<User> getUser(@PathVariable Long uid) {
        // TODO: Implement UserService invocation
        return null;
    }

    @PostMapping("")
    public ResponseEntity<User> createUser(@PathVariable Long uid, @RequestBody User user) {
        // TODO: Implement UserService invocation
        return null;
    }

    @GetMapping("/{uid}")
    public ResponseEntity<User> getUserById(@PathVariable Long uid) {
        // TODO: Implement UserService invocation
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
