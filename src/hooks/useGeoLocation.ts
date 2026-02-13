"use client";

import { useState, useEffect } from 'react';

export interface GeoLocation {
    city: string;
    region: string;
    pincode: string;
    country: string;
    ip: string;
}

// Global cache so geo data persists across component mounts/unmounts (e.g. modals)
let cachedGeo: GeoLocation | null = null;
let fetchPromise: Promise<void> | null = null;

const fetchGeoData = async () => {
    if (cachedGeo) return; // Already have data
    if (fetchPromise) return fetchPromise; // Already fetching

    fetchPromise = (async () => {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) return;
            const data = await response.json();
            cachedGeo = {
                city: data.city || '',
                region: data.region || '',
                pincode: data.postal || '',
                country: data.country_name || '',
                ip: data.ip || ''
            };
        } catch (err) {
            console.error("Geo fetch failed:", err);
        } finally {
            fetchPromise = null;
        }
    })();

    return fetchPromise;
};

const useGeoLocation = () => {
    const [location, setLocation] = useState<GeoLocation | null>(cachedGeo);

    useEffect(() => {
        // If we already have cached data, use it immediately
        if (cachedGeo) {
            setLocation(cachedGeo);
            return;
        }

        // Otherwise fetch and update when ready
        let mounted = true;
        fetchGeoData().then(() => {
            if (mounted && cachedGeo) {
                setLocation(cachedGeo);
            }
        });

        return () => { mounted = false; };
    }, []);

    return location;
};

export default useGeoLocation;
