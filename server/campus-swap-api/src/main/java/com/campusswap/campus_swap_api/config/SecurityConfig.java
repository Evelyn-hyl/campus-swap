package com.campusswap.campus_swap_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/products/**").permitAll()  // public API
                .anyRequest().permitAll()
            )
            .csrf(csrf -> csrf.disable())       // allow POST/PUT from React without CSRF tokens
            .formLogin(form -> form.disable())  // disable default login page
            .httpBasic(basic -> basic.disable()); // disable basic auth
        return http.build();
    }
}
