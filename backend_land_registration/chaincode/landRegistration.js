// chaincode/landRegistration.js
'use strict';

const { Contract } = require('fabric-contract-api');

class LandRegistration extends Contract {
  async registerLand(ctx, plotId, owner, details) {
    const land = { plotId, owner, details, status: 'Registered', timestamp: new Date().toISOString() };
    await ctx.stub.putState(plotId, Buffer.from(JSON.stringify(land)));
    return JSON.stringify(land);
  }

  async transferOwnership(ctx, plotId, newOwner) {
    const landBytes = await ctx.stub.getState(plotId);
    if (!landBytes || landBytes.length === 0) {
      throw new Error(`Plot with ID ${plotId} does not exist`);
    }

    const land = JSON.parse(landBytes.toString());
    land.owner = newOwner;
    land.status = 'Ownership Transferred';
    land.timestamp = new Date().toISOString();

    await ctx.stub.putState(plotId, Buffer.from(JSON.stringify(land)));
    return JSON.stringify(land);
  }

  async queryLand(ctx, plotId) {
    const landBytes = await ctx.stub.getState(plotId);
    if (!landBytes || landBytes.length === 0) {
      throw new Error(`Plot with ID ${plotId} does not exist`);
    }
    return landBytes.toString();
  }
}

module.exports = LandRegistration;
