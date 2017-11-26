import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import * as uuid from 'uuid';

@Component()
export class UsersService {

    /*******************************************************
     * Get all Users
     *******************************************************/
    public getAllUsers() {
        return new Promise((resolve, reject) => {
            let users: Array<{ id: number, name: string }> = Array(
                { "id": 0, "name": "Madan" },
                { "id": 1, "name": "Meenakshi" },
                { "id": 2, "name": "Manya" }
            );

            resolve(users);
        })
    }

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