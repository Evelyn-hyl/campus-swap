package com.campusswap.campus_swap_api.domain.user;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

@Entity
@Table(name = "user_profiles")
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long profile_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user_id;
}
