package com.campusswap.campus_swap_api.security;

import com.campusswap.campus_swap_api.service.user.OAuthUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final OAuthUserService oAuthUserService;

    @Autowired
    public SecurityConfig(OAuthUserService pOAuthUserService) {
        oAuthUserService = pOAuthUserService;
    }

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((authorize) -> { authorize
                    .requestMatchers("/", "/login/**", "/oauth2/**", "/error").permitAll()
                    .anyRequest().authenticated();
                })
                .exceptionHandling(e -> e
                        .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                )
                .oauth2Login(o -> o
                        .authorizationEndpoint(a -> a
                                .baseUri("/oauth2/authorize")
                        )
                        .userInfoEndpoint(u -> u
                                .userService(oAuthUserService)
                        )
                );
        return http.build();
    }

}
