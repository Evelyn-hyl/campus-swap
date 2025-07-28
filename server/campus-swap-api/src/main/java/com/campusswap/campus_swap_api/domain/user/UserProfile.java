package com.campusswap.campus_swap_api.domain.user;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

@Entity
@Table(name = "user_profiles")
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String university;

    @Lob
    @Column(nullable = false)
    private String profileText;

    @OneToOne(mappedBy = "userProfile", fetch = FetchType.EAGER)
    private User user;

    @Override
    public String toString() {
        return String.format(
                "UserProfile[id=%d, firstName=%s, lastName=%s]",
                id, firstName, lastName
        );
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getProfileText() {
        return profileText;
    }
}
