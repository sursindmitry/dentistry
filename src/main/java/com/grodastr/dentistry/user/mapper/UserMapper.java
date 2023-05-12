package com.grodastr.dentistry.user.mapper;

import com.grodastr.dentistry.user.dao.entity.User;
import com.grodastr.dentistry.user.dto.UserDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toDto(User source);

    User toEntity(UserDto source);
}
