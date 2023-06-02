package com.grodastr.dentistry.user.controller;

import com.grodastr.dentistry.user.dto.UserDto;
import com.grodastr.dentistry.user.facade.UserFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
public class UserController {
    private final UserFacade userFacade;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<UserDto> getAllUsers() {
        return userFacade.getAllUsers();
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public UserDto addUser(@RequestBody UserDto userDto) {
        return userFacade.addUser(userDto);
    }

    @DeleteMapping(path = "{userId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteUser(@PathVariable("userId") Long userId) {
        userFacade.deleteUser(userId);
    }

    @PutMapping(path = "{userId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public UserDto updateUser(@RequestBody UserDto userDto, @PathVariable("userId") Long userId) {
        return userFacade.updateUser(userDto, userId);
    }
}
