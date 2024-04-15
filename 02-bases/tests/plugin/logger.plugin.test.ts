import { level } from 'winston';
import { buildLogger, logger as winstonLogger, logger } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin.ts', () => {

    test('buildLogger should return', async () => {

        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    test('logger.log should log a message', () => {

        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service
            })
        );
    })

    test('logger.error should log a message', () => {

        const winstonLoggerMock = jest.spyOn(winstonLogger, 'error');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.error(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            expect.objectContaining({
                level: 'error',
                message: 'test message',
                service: 'test service'
            })
            

        )



    })
})
