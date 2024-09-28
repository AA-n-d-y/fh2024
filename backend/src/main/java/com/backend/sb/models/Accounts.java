package com.backend.sb.models;
import jakarta.persistence.*;

@Entity
@Table(name = "Accounts")
public class Accounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountID;

    // Attributes
}
