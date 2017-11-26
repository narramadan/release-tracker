import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import * as uuid from 'uuid';

@Component()
export class VersionsService {

    public getAllVersions() {
        return new Promise((resolve, reject) => {
            let users: Array<{ id: number, name: string }> = Array(
                { "id": 0, "name": "Madan" },
                { "id": 1, "name": "Meenakshi" },
                { "id": 2, "name": "Manya" }
            );

            resolve(users);
        })
    }

    public getVersion(value: any) {
        return new Promise((resolve, reject) => {
            let user: { id: number, name: string } = { "id": 0, "name": "Madan" };

           // resolve(user);
            reject(new HttpException("Error occurred while fetching Users", 500));
        });
    }

    public createVersion(username: String, email: String, password: String) {
        return new Promise((resolve, reject) => {
            // Create User
        });
    }

    public updateVersion(id: String, username: String, email: String, password: String, role: String) {
        return new Promise((resolve, reject) => {
            // Update user
        });
    }

    public deleteVersion(id: String) {
        return new Promise((resolve, reject) => {
            // Delete User
        });
    }
}