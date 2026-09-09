import { type SpeedBucketRequest } from 'src/engine/core-modules/usage-limit/types/speed-bucket-request.type';

export type SpeedBucketAdmission = {
  admittedCount: number;
  exhausted: SpeedBucketRequest | null;
  retryAfterMs: number;
};
