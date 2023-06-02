package com.grodastr.dentistry.user.service;

import com.grodastr.dentistry.user.dao.entity.User;
import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User addUser(User user);
    void deleteUser(Long userId);
    User updateUser(User user, Long userId);
}