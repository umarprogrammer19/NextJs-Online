import ShipEngine from "shipengine";

const shipEngine = new ShipEngine({
    apiKey: process.env.SHIPENGINE_API_KEY as string,
});

export { shipEngine };