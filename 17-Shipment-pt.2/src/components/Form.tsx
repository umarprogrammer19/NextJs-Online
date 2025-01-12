"use client";
import { useRef } from "react";

export default function AddressForm() {

    // Define refs for the input fields
    const getName = useRef<HTMLInputElement>(null);
    const getPhone = useRef<HTMLInputElement>(null);
    const getAd1 = useRef<HTMLInputElement>(null);
    const getAd2 = useRef<HTMLInputElement>(null);
    const getCity = useRef<HTMLInputElement>(null);
    const getProvince = useRef<HTMLInputElement>(null);
    const getPostalCode = useRef<HTMLInputElement>(null);
    const getCountry = useRef<HTMLInputElement>(null);
    const getAddressResidentialIndicator = useRef<HTMLSelectElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            shipToAddress: {
                name: getName.current?.value,
                phone: getPhone.current?.value,
                addressLine1: getAd1.current?.value,
                addressLine2: getAd2.current?.value,
                cityLocality: getCity.current?.value,
                stateProvince: getProvince.current?.value,
                postalCode: getPostalCode.current?.value,
                countryCode: getCountry.current?.value,
                addressResidentialIndicator: getAddressResidentialIndicator.current?.value,
            },
            packages: [
                {
                    weight: { value: 5, unit: "ounce" },
                    dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
                },
            ],
        };

        // console.log("Payload:", payload);
        try {

            const res = await fetch("http://localhost:3000/api/shipengine", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            console.log("Response From API", data);
        } catch (error) {
            console.log("Error");
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h1 className="text-xl font-bold mb-4">Address Form</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        ref={getName}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Michael Smith"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        ref={getPhone}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="+1 555 987 6543"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
                        Address Line 1
                    </label>
                    <input
                        type="text"
                        id="addressLine1"
                        ref={getAd1}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="456 Oak Avenue"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
                        Address Line 2
                    </label>
                    <input
                        type="text"
                        id="addressLine2"
                        ref={getAd2}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Suite 200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cityLocality" className="block text-sm font-medium text-gray-700">
                        City/Locality
                    </label>
                    <input
                        type="text"
                        id="cityLocality"
                        ref={getCity}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Los Angeles"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700">
                        State/Province
                    </label>
                    <input
                        type="text"
                        id="stateProvince"
                        ref={getProvince}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="CA"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                        Postal Code
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        ref={getPostalCode}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="90001"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">
                        Country Code
                    </label>
                    <input
                        type="text"
                        id="countryCode"
                        ref={getCountry}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="US"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="addressResidentialIndicator" className="block text-sm font-medium text-gray-700">
                        Address Residential Indicator
                    </label>
                    <select
                        id="addressResidentialIndicator"
                        ref={getAddressResidentialIndicator}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
