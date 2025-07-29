package com.campusswap.campus_swap_api.service.user;

import com.campusswap.campus_swap_api.domain.user.User;
import com.campusswap.campus_swap_api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class OAuthUserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Autowired
    public OAuthUserService(OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService, UserRepository pUserRepository) {
       userRepository = pUserRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String providerLiteral = userRequest.getClientRegistration().getRegistrationId();
        String providerId = oAuth2User.getAttribute("");

        User.AuthProvider provider;
        switch (providerLiteral) {
            case "google" -> {
                provider = User.AuthProvider.GOOGLE;
            }
            case "github" -> {
                provider = User.AuthProvider.GITHUB;
            }
            default -> {
                // TODO: Raise Exception for Handler to deal with
                throw new OAuth2AuthenticationException(
                    new OAuth2Error("invalid_provider", "Not a valid provider", providerLiteral)
                );
            }
        }

        userRepository.findByProviderIdAndAuthProvider(providerId, provider)
                .stream()
                .map()
                .orElseGet();

        return null;
    }
}
