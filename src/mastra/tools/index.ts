import { createTool } from "@mastra/core";
import { createReport } from "./report";
import z from "zod";

/**
 * Tool responsible for generating reports locally
 */

export const generateReportTool = createTool({
  id: "generate markdown report",
  description: "Generate markdown report locally",
  inputSchema: z.object({
    report: z.string().describe("The generated report"),
    filename: z.string().optional().describe("the file name"),
    page: z.number().describe("The current page number"),
  }),
  execute: async ({ context }) => {
    let reportName = "";
    if (context.filename) {
      reportName += context.filename;
    }

    const report = await createReport(
      `${reportName}-real-report-${context.page}`,
      context.report,
      "markdown"
    );
    console.log("Generated Real report at: ", report);
    return { report };
  },
});