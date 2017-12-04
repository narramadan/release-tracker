import { HttpException } from '@nestjs/core';
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import * as uuid from 'uuid';

import { User } from './entities/user.entities'
import { UserDto } from './dtos/user.dto';

@Component()
export class UsersService {

    constructor(
        @Inject('UserRepository') private readonly userRepository: Repository<User>
    ) { }

    /*******************************************************
     * Get all Users
     *******************************************************/
    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }
    
    /*******************************************************
     * Get One User by Id
     *******************************************************/
    async getUser(id: number): Promise<User> {
        return await this.userRepository.findOneById(id);
    }

    /*******************************************************
     * Create User
     *******************************************************/
    async createUser(user:User): Promise<number> {

        console.dir(user);

        let id: number;
        await this.userRepository.save(user)
            .then(user => {
                id = user.id
            }).catch(error => {
                throw new HttpException("Error occurred while saving user : "+error, 500);
            });        
        return id;        
    }

    /*******************************************************
     * Update User
     *******************************************************/
    async updateUser(user: User): Promise<User> {
        await this.userRepository.save(user)
            .catch(error => {
                throw new HttpException("Error occurred while updating user", 500);
            });
        return user;
    }

    /*******************************************************
     * Delete User
     *******************************************************/
    async deleteUser(id: number): Promise<number> {
        await this.userRepository.deleteById(id)
            .catch(error => {
                throw new HttpException("Error occurred while deleting user with id : "+id, 500);
            })
        return id;
    }
}