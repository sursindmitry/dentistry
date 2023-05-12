package com.grodastr.dentistry.user.service;

import com.grodastr.dentistry.user.dao.UserRepository;
import com.grodastr.dentistry.user.dao.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User addUser(User user) {
        return repository.save(user);
    }
}
