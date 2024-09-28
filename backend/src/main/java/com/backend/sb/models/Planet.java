package com.backend.sb.models;

public class Planet {

    private String name;
    private Double distance_light_year;

    public Planet() {}

    public Planet(String name, Double distance_light_year) {
        this.name = name;
        this.distance_light_year = distance_light_year;
    }

    // Getters and Setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getDistance_light_year() {
        return distance_light_year;
    }

    public void setDistance_light_year(Double distance_light_year) {
        this.distance_light_year = distance_light_year;
    }
}

