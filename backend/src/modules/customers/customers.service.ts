import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import * as uuid from 'uuid';

@Component()
export class CustomersService {

    public getAllCustomers() {
        return new Promise((resolve, reject) => {
            let users: Array<{ id: number, name: string }> = Array(
                { "id": 0, "name": "Madan" },
                { "id": 1, "name": "Meenakshi" },
                { "id": 2, "name": "Manya" }
            );

            resolve(users);
        })
    }

    public getCustomer(value: any) {
        return new Promise((resolve, reject) => {
            let user: { id: number, name: string } = { "id": 0, "name": "Madan" };

           // resolve(user);
            reject(new HttpException("Error occurred while fetching Customer", 500));
        });
    }

    public createCustomer(username: String, email: String, password: String) {
        return new Promise((resolve, reject) => {
            // Create customer
        });
    }

    public updateCustomer(id: String, username: String, email: String, password: String, role: String) {
        return new Promise((resolve, reject) => {
            // Update customer
        });
    }

    public deleteCustomer(id: String) {
        return new Promise((resolve, reject) => {
            // Delete customer
        });
    }
}