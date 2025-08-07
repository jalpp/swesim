import { AgentNetwork } from "@mastra/core/network";
import { openai } from "@ai-sdk/openai";
import {
  designerAgent,
  backendAgent,
  frontendAgent,
  databaseAgent,
} from "../agents";

export const SweSimulationNetwork = new AgentNetwork({
  name: "SWE Simulation Network",
  instructions: `
    You are the project coordinator responsible for orchestrating the collaboration between all development agents and ensuring project success.

    You must first call all agents if it requries full stack work, or specific agents for specific by default call all the agents and assume user wants full stack work.

    Finally return a report containing all the needed information from all agents, for backend and frontend agents there must be code/api docs present as well for database report there must be schema report

    `,
  model: openai("gpt-4o-mini"),
  agents: [designerAgent, backendAgent, frontendAgent, databaseAgent],
  
  
});
