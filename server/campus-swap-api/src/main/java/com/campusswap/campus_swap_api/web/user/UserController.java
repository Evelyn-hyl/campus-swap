package com.campusswap.campus_swap_api.web.user;

import com.campusswap.campus_swap_api.domain.user.User;
import com.campusswap.campus_swap_api.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{uid}")
    public ResponseEntity<User> getUser(@PathVariable Long uid) {
        // TODO: Implement UserService invocation
        return null;
    }

    @PostMapping("/{uid}")
    public ResponseEntity<User> createUser(@PathVariable Long uid, @RequestBody User user) {
        // TODO: Implement UserService invocation
        return null;
    }

    @PutMapping("/{uid}")
    public ResponseEntity<User> updateUser(@PathVariable Long uid, @RequestBody User user) {
        return null;
    }

    @DeleteMapping("/{uid}")
    public ResponseEntity<User> deleteUser(@PathVariable Long uid) {
        return null;
    }
}
