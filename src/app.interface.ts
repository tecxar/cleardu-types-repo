import express from "express";
import { Server } from "http";
import socket from "socket.io";
import * as session from "express-session";

export interface Application {
  app: express.Application;
  server: Server;
  io: socket.Server;
  redisIO: any;
  port: string | number;
  env: string;
  controllerPath: string[];
  middlewarePath: string[];
  sessionMiddleware: express.RequestHandler;
  sessionStore: session.Store;
}
