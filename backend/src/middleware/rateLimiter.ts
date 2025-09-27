import type { RequestHandler } from "express";
import ratelimit from "../config/upstash.ts";


const rateLimiter: RequestHandler = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("myLimitKey"); 
        if(!success) return res.status(429).json({
            message: "Too many requests, please try again later",
        })

        next();
    } catch (error) {
        console.log("Rate limit Error",error);
        next(error);
    }
}

export default rateLimiter;