package com.backend.sb.controllers;
import com.backend.sb.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;


@RestController
public class AccountsController {
    @Autowired 
    private AccountsRepo repo;

    private boolean loggedIn(HttpSession ssn) {
        Account account = (Account) ssn.getAttribute("accountUser");
        return account != null;
    }

    // Post request for creating an account
    @PostMapping("/signup")
    public ResponseEntity<Boolean> createAccount(HttpSession ssn, @RequestBody Account account, HttpServletRequest request, HttpServletResponse response) {
        // If the account already exists
        if (repo.findByUsername(account.getUsername()).size() > 0) {
            return new ResponseEntity<>(false, HttpStatus.CONFLICT);
        }
        // Else
        else {
            repo.save(account);
            return new ResponseEntity<>(true, HttpStatus.CREATED);
        }
    }

    // Post request for logging in
    @PostMapping("/login") 
    public ResponseEntity<Boolean> loggingIn(HttpSession ssn, @RequestBody Account acc, HttpServletRequest request, HttpServletResponse response) {
        // If the user's details match, log them in and set the session
        List<Account> accounts = repo.findByEmailAndPassword(acc.getEmail(), acc.getPassword());
        if (!accounts.isEmpty()) {
            Account account = accounts.get(0);
            request.getSession().setAttribute("accountUser", account);
            return new ResponseEntity<>(true, HttpStatus.OK);
        }

        // Else return false
        else {
            return new ResponseEntity<>(false, HttpStatus.UNAUTHORIZED);
        }
    }

    // Get request for seeing if the user is logged in
    @GetMapping("/getLogin") 
    public ResponseEntity<Boolean> isLoggedIn(HttpSession ssn, HttpServletRequest request, HttpServletResponse response) {
        // If the user's not logged in
        if (!loggedIn(ssn)) {
            return new ResponseEntity<>(false, HttpStatus.UNAUTHORIZED);
        }

        // Else
        else {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
    }
}
