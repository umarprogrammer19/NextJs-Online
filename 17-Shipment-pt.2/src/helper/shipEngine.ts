import ShipEngine from "shipengine";

export const shipEngine = new ShipEngine({
    apiKey: process.env.SHIPENGINE_API_KEY as string
});