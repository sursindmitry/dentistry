package com.grodastr.dentistry.user.service;

import com.grodastr.dentistry.user.dao.UserRepository;
import com.grodastr.dentistry.user.dao.entity.User;
import com.grodastr.dentistry.user.exception.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public User updateUser(User user, Long userId) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("Пользователь с ID " + userId + " не найден"));

        existingUser.setName(user.getName());
        existingUser.setLastname(user.getLastname());
        existingUser.setPayable(user.getPayable());
        existingUser.setCuredStatus(user.getCuredStatus());
        existingUser.setPaymentStatus(user.getPaymentStatus());

        return userRepository.save(existingUser);
    }
}