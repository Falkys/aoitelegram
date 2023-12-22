export default {
  name: "$multi",
  callback: async (ctx, event, database, error) => {
    ctx.argsCheck(2, error, "$multi");
    const args = await ctx.getEvaluateArgs();
    ctx.checkArgumentTypes(args, error, ["number", "number"]);

    return args[0] * args[1];
  },
};