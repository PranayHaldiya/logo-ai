import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
 
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    // Allow 10 requests per 1 month on prod
    limiter: Ratelimit.fixedWindow(10, "30 d"),
    analytics: true,
    prefix: "logocreator",
})