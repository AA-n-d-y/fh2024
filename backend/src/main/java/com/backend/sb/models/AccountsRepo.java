package com.backend.sb.models;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AccountsRepo extends JpaRepository<Account, Integer>{
    Account findByAccountID(int accountID);    
    List<Account> findByAccountandPassword(String accountName, String password);
    List<Account> findByAccountName(String accountName);
}
