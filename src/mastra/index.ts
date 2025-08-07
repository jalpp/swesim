
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { SweSimulationNetwork } from './networks';
import { backendAgent, databaseAgent, designerAgent, frontendAgent } from './agents';

export const mastra = new Mastra({
  networks: {SweSimulationNetwork},
  agents: {designerAgent, backendAgent, frontendAgent, databaseAgent},
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
