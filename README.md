# Release Tracker

>**** **Project is under Development** ****

## Overview
Release Treacker is for Software Products that are available for GA to customers and track Hot fixes &amp; Patches delivered.

This project is built to mitigate challanges that we usually face when managing different versions of our product and track Hotfix or Patches that are delivered to customers.

Below is the highlevel overview on the entities and their relations

![Feature Overview](./resources/Features-Overview.jpg)

* `Users` - One or more users who manages the application
* `Products` - One or more Products can be defined in the application
* `Versions` - Each Product can have one or more versions
* `Releases` - Each Version of a Product can have one or more releases ( GA, Patches, Hotfixes)
* `Customers` - One or more Customers can be defined in the application. A customer can have one or more products deployed at their end with a specific release one at a time. There cannot be two releases for a same product available at the customer.

## Application Stack

![Application Stack](./resources/application-stack.png)

Release Tracker will comprise of 
* Rest Interface Backend - Nest Js + TypeORM + MySql
* User Interface - Vue / React / Angular
* Mobile Interface - React Native
* Unit Testing - Jest
* E2E Testing - Night Watch
* CI - Travis CI
* CD
    * AWS EC2 Ubuntu instances Provisioning through Terraform
    * Deployment - Docker Swarm with Traefik as Reverse Proxy
