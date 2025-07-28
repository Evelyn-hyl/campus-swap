package com.campusswap.campus_swap_api.exception;

public class UserNotFoundException extends RuntimeException {

    UserNotFoundException(Long id) {
        super("User not found: " + id);
    }

}
