package com.backend.sb.services;

import com.backend.sb.models.Planet;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class PlanetService {

    @Value("${api.ninjas.key}")
    private String apiKey;

    private final String apiBaseUrl = "https://api.api-ninjas.com/v1/planets";

    // Method to retrieve planets from the Planets API based on name and distance
    public Planet[] getPlanets(String name, Double minDistance, Double maxDistance) {
        RestTemplate restTemplate = new RestTemplate();

        // Build the URL with the name and distance as query parameters
        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(apiBaseUrl);

        if (name != null && !name.isEmpty()) {
            uriBuilder.queryParam("name", name);
        }

        if (minDistance != null) {
            uriBuilder.queryParam("min_distance_light_year", minDistance);
        }

        if (maxDistance != null) {
            uriBuilder.queryParam("max_distance_light_year", maxDistance);
        }

        // Set up the headers, including the API key
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Api-Key", apiKey);

        // Create an HTTP entity with headers
        HttpEntity<String> entity = new HttpEntity<>(headers);

        // Make the request and return the Planet array
        ResponseEntity<Planet[]> response = restTemplate.exchange(
                uriBuilder.toUriString(),
                HttpMethod.GET,
                entity,
                Planet[].class
        );

        // Return the response body containing an array of planets
        return response.getBody();
    }
}

