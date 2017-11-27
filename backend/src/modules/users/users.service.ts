import { HttpException } from '@nestjs/core';
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import * as uuid from 'uuid';

import { User, UserDetails } from './entities/user.entities'

@Component()
export class UsersService {

    constructor(
        @Inject('UserRepository') private readonly userRepository: Repository<User>,
        @Inject('UserDetailsRepository') private readonly userDetailsRepository: Repository<UserDetails>
    ) { }

    /*******************************************************
     * Get all Users
     *******************************************************/
    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }
    /*
        return new Promise((resolve, reject) => {
            let users: Array<{ id: number, name: string }> = Array(
                { "id": 0, "name": "Madan" },
                { "id": 1, "name": "Meenakshi" },
                { "id": 2, "name": "Manya" }
            );

            resolve(users);
        })
    }
    */
    /*******************************************************
     * Get One User by Id
     *******************************************************/
    public getUser(value: any) {
        return new Promise((resolve, reject) => {
            let user: { id: number, name: string } = { "id": 0, "name": "Madan" };

           // resolve(user);
            reject(new HttpException("Error occurred while fetching Users", 500));
        });
    }

    /*******************************************************
     * Create User
     *******************************************************/
    public createUser(username: String, email: String, password: String) {
        return new Promise((resolve, reject) => {
            // Create User
        });
    }

    /*******************************************************
     * Update User
     *******************************************************/
    public updateUser(id: String, username: String, email: String, password: String, role: String) {
        return new Promise((resolve, reject) => {
            // Update user
        });
    }

    /*******************************************************
     * Delete User
     *******************************************************/
    public deleteUser(id: String) {
        return new Promise((resolve, reject) => {
            // Delete User
        });
    }
}