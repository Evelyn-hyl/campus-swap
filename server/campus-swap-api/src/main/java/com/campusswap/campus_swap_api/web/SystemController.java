package com.campusswap.campus_swap_api.web;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.ServletWebRequest;

import java.util.Map;

@RestController
@RequestMapping("/api/")
public class SystemController {

    private static final String ERROR_PATH = "/error";

    private final ErrorAttributes errorAttributes;

    public SystemController(ErrorAttributes pErrorAttributes) {
        this.errorAttributes = pErrorAttributes;
    }

    /**
     * Overwrites the default whitelabel HTML error page with JSON values
     *
     * @return ResponseEntity<ErrorResponse>
     */
    @RequestMapping(ERROR_PATH)
    public ResponseEntity<ErrorResponse> handleError(HttpServletRequest request) {
        Map<String, Object> errorAttrs = errorAttributes.getErrorAttributes(
                new ServletWebRequest(request),
                ErrorAttributeOptions.defaults()
        );
        return null;
    }

    /**
     * Diagnostic check which simply returns UP
     *
     * @return Map with key "status and value "UP"
     */
    @RequestMapping("/health")
    public Map<String, Object> getHealth() {
        return Map.of("status", "UP");
    }
}
