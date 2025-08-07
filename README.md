# SWESim - Software Engineering Simulation Network

A powerful multi-agent system that coordinates specialized AI agents to generate comprehensive software implementation decision reports for full-stack applications.

## Usecase
This project aims to solve the problem of brainstorming how an full stack app would like just from having an idea, this project helps developers explore ideas agents present to them via decision reports and change agents according to stack they use in development. It enables complete software project planning through coordinated AI agents using the Mastra framework. It provides automated design, architecture, and implementation planning for web applications, all orchestrated through a unified agent network.


## Template

This template provides easy to use agentnetwork that uses Mastra's tools, agents and agentnetwork that can be forked for personal needs, ex: changing backend from Typescript to Java or making Database agent use NoSQL instead of SQL

## Features

* **Multi-Agent Coordination**: Four specialized agents working in sequence
* **Complete Project Planning**: From database design to UI/UX specifications  
* **Implementation Reports**: Detailed technical specifications saved locally
* **Sequential Workflow**: Agents build upon each other's work for cohesive results
* **Modern Tech Stack**: Built with Mastra framework and OpenAI integration

## Installation

**Prerequisites**
* Node.js (v20+)
* npm or yarn
* OpenAI API access

**Setup**

1. Clone the repository:
```bash
git clone https://github.com/jalpp/swesim.git
cd swesim
```

2. Install dependencies:
```bash
npm install
```

3. Copy example env file
```bash
  cp .env.example .env
```

4. Insert the OpenAI API key

```bash
OPENAI_API_KEY=insert-key-here
```

5. Start the Mastra server
```bash
 npm run dev
```

## Usage

Head over to Networks tab -> select SWE Simulation Network -> prompt it to build a project idea 


**Generated Reports**

Implementation reports are automatically saved to `./mastra/reports/` folder with complete technical specifications.

**Example Reports**

the `/reports` folder contains sample report which was generated when asked to create a clothing line shopping full stack app.

## Architecture

**Core Agents**

1. **Database Agent**
   * Designs database schemas and data models
   * Creates migration scripts and indexing strategies
   * Provides performance optimization recommendations

2. **Backend Agent** 
   * Creates API specifications and server architecture
   * Implements authentication and security patterns
   * Designs scalable backend infrastructure

3. **Frontend Agent**
   * Plans React/Next.js component architecture
   * Defines state management and data flow
   * Implements responsive design patterns

4. **Designer Agent**
   * Develops UI/UX specifications and design systems
   * Creates accessibility guidelines and user flows
   * Establishes visual design standards

**Coordinator Network(AgentNetwork)**
* Orchestrates all agents in optimal sequence
* Ensures context sharing between agents
* Compiles unified implementation reports

**Flow Diagram**

```
Project Request → SWE Network → Database Agent → Backend Agent → Frontend Agent → Designer Agent → Local report generation 
```

## Project Structure

```
swesim/
├── .mastra/reports/       # Generated implementation reports
├── reports/       # Example reports
├── src/

├── mastra/
│   ├── agents/        # Agent definitions and configurations
│   └── network/       # Coordinator network implementation
│   └── tools/       # tools implementation

```


## Credits

This project is built with:
* [**Mastra**](https://mastra.ai/) - AI Agent framework
* [**OpenAI**](https://openai.com/) - AI models for agent intelligence
