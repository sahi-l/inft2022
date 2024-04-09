import winston from "winston";

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transport: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error'}),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ]
});

if (process.env.NODE_ENV !==  'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export const RequestLogger = (req, res, next) => {
    const {url, method} = req;
    logger.log({
        level: 'info',
        message: `[${new Date().toString()}] $(method) ${url}`
    });
    next();
}