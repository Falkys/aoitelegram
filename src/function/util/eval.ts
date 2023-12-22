export default {
  name: "$eval",
  callback: async (ctx, event, database, error) => {
    ctx.argsCheck(1, error, "$eval");
    const content = await ctx.getEvaluateArgs();
    return event.telegram.evaluateCommand(ctx.fileName, ...content, event);
  },
};