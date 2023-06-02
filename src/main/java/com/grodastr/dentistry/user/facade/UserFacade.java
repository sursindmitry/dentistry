package com.grodastr.dentistry.user.facade;

import com.grodastr.dentistry.user.dao.entity.User;
import com.grodastr.dentistry.user.dto.UserDto;
import com.grodastr.dentistry.user.mapper.UserMapper;
import com.grodastr.dentistry.user.service.UserService;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserFacade {
    private final UserService userService;
    private final UserMapper userMapper;

    public UserFacade(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    public List<UserDto> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return users.stream()
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }

    public UserDto addUser(UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        User persistedUser = userService.addUser(user);
        return userMapper.toDto(persistedUser);
    }

    public void deleteUser(Long userId) {
        userService.deleteUser(userId);
    }

    public UserDto updateUser(UserDto userDto, Long userId) {
        User user = userMapper.toEntity(userDto);
        User updatedUser = userService.updateUser(user, userId);
        return userMapper.toDto(updatedUser);
    }
}
