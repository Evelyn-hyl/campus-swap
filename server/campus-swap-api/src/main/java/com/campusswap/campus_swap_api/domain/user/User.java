package com.campusswap.campus_swap_api.domain.user;

import jakarta.persistence.*;
import org.hibernate.annotations.Check;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.security.AuthProvider;
import java.time.Instant;

@Entity
@Table(name = "users")
@Check(constraints = "")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50, unique = true)
    private String username;

    public enum AuthProvider {
        LOCAL,
        GOOGLE,
        META
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "auth_provider", nullable = true)
    private AuthProvider authProvider;

    @Column(nullable = true)
    private String providerId;

    // Change based on different login types
    @Column(nullable = true)
    private String passwordHash;

    @Column(nullable = false)
    private String email;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private Instant lastUpdatedAt;
}
