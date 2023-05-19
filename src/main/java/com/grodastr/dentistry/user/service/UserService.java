package com.grodastr.dentistry.user.service;

import com.grodastr.dentistry.user.dao.UserRepository;
import com.grodastr.dentistry.user.dao.entity.User;
import com.grodastr.dentistry.user.exception.UserNotFoundException;
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

    public void deleteUser(Long userId) {
        if (!repository.existsById(userId)) {
            throw new UserNotFoundException("Пользователь с ID " + userId + " не существует");
        }
        repository.deleteById(userId);
    }

    public User updateUser(User toEntity, Long userId) {
        User updateuser = repository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("Пользователь с ID : " + userId + " не существует"));
        updateuser.setName(toEntity.getName());
        updateuser.setLastname(toEntity.getLastname());
        updateuser.setPayable(toEntity.getPayable());
        updateuser.setCuredStatus(toEntity.getCuredStatus());
        updateuser.setPaymentStatus(toEntity.getPaymentStatus());

        repository.save(updateuser);
        return updateuser;
    }
}
