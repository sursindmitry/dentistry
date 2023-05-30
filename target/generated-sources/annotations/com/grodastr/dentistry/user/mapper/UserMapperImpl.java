package com.grodastr.dentistry.user.mapper;

import com.grodastr.dentistry.user.dao.entity.User;
import com.grodastr.dentistry.user.dto.UserDto;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-30T12:39:49+0700",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.7 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toDto(User source) {
        if ( source == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setId( source.getId() );
        userDto.setName( source.getName() );
        userDto.setLastname( source.getLastname() );
        userDto.setPayable( source.getPayable() );
        userDto.setCuredStatus( source.getCuredStatus() );
        userDto.setPaymentStatus( source.getPaymentStatus() );

        return userDto;
    }

    @Override
    public User toEntity(UserDto source) {
        if ( source == null ) {
            return null;
        }

        User user = new User();

        user.setId( source.getId() );
        user.setName( source.getName() );
        user.setLastname( source.getLastname() );
        user.setPayable( source.getPayable() );
        user.setCuredStatus( source.getCuredStatus() );
        user.setPaymentStatus( source.getPaymentStatus() );

        return user;
    }
}
