package com.campusswap.campus_swap_api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CampusSwapApiApplication {

	private static final Logger log = LoggerFactory.getLogger(CampusSwapApiApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(CampusSwapApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			log.info("Campus-Swap API Application started");
		};
	}
}
