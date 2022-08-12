import * as winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: '.logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: '.logs/all.log' }),
];

const logger = winston.createLogger({
  level: 'info',
  levels,
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports,
});

export { logger };
