package com.backend.sb.models;
import jakarta.persistence.*;

@Entity
<<<<<<< HEAD
@Table(name = "Accounts")
public class Accounts {
=======
@Table(name = "Account")
public class Account {
>>>>>>> 612317b98218b7a88ec035a553bd188a054fa404
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountID;

    // Attributes
<<<<<<< HEAD
    private String name;
    private String email;
    private String password;

    // Default constructor 
    public Accounts() {
    }

    // Parameterized constructor
    public Accounts(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Getters and setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
=======
>>>>>>> 612317b98218b7a88ec035a553bd188a054fa404
}
