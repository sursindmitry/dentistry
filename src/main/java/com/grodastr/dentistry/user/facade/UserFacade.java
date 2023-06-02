package com.grodastr.dentistry.user.facade;

import com.grodastr.dentistry.user.dao.entity.User;
import com.grodastr.dentistry.user.dto.UserDto;
import com.grodastr.dentistry.user.mapper.UserMapper;
import com.grodastr.dentistry.user.service.UserServiceImpl;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserFacade {
    private final UserServiceImpl userServiceImpl;
    private final UserMapper userMapper;

    public UserFacade(UserServiceImpl userServiceImpl, UserMapper userMapper) {
        this.userServiceImpl = userServiceImpl;
        this.userMapper = userMapper;
    }

    public List<UserDto> getAllUsers() {
        List<User> users = userServiceImpl.getAllUsers();
        return users.stream()
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }

    public UserDto addUser(UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        User persistedUser = userServiceImpl.addUser(user);
        return userMapper.toDto(persistedUser);
    }

    public void deleteUser(Long userId) {
        userServiceImpl.deleteUser(userId);
    }

    public UserDto updateUser(UserDto userDto, Long userId) {
        User user = userMapper.toEntity(userDto);
        User updatedUser = userServiceImpl.updateUser(user, userId);
        return userMapper.toDto(updatedUser);
    }
}
