import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';

import { ApplicationModule } from './modules/app.module';
import { ValidationPipe } from './modules/common/pipes/validation.pipe';

// Define port on which instance should be running
enum Port {
	Local = 3000,
	Docker = 4000
};

let bootString: string = `
----------- Server: http://localhost:${Port.Local} ------
`;

// Add middlewares to the express instance
var addMiddleware = (instance) => {
	instance.use(bodyParser.json());
	instance.use(cors());
}

// Setup Express
var setUpExpress = () => {
	const instance = express();	
	addMiddleware(instance);
	return instance;
}

// Set Swagger OpenAPI document
var setUpSwagger = (app) => {
	const options = new DocumentBuilder()
		.setTitle('Release Tracker')
		.setDescription('Release Tracker API definition')
		.setVersion('0.1')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/swagger', app, document);	
}

async function main(port: number = 3000) {
	const app = await NestFactory.create(ApplicationModule, setUpExpress());
	await app.connectMicroservice({ transport: Transport.TCP, port: 5667 });
	await app.startAllMicroservicesAsync();

	await setUpSwagger(app);
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(port, () => console.info(bootString));
	return app;
}

main(Port.Local).then(() => '∆∆∆∆∆ loading ∆∆∆∆∆');